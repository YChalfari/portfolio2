import { useEffect, useRef, useState } from 'react';
import './CaptionedVideo.css';

function toSeconds(stamp) {
  const [hours, minutes, seconds] = stamp.trim().replace(',', '.').split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function parseCues(raw) {
  return raw
    .replace(/\r/g, '')
    .replace(/^WEBVTT[^\n]*\n+/, '')
    .split(/\n\n+/)
    .flatMap((block) => {
      const lines = block.split('\n').filter(Boolean);
      const timingIndex = lines.findIndex((line) => line.includes('-->'));
      if (timingIndex === -1) return [];
      const [start, end] = lines[timingIndex].split('-->').map((part) => toSeconds(part));
      const text = lines.slice(timingIndex + 1).join('\n');
      return text ? [{ start, end, text }] : [];
    });
}

function siblingSrt(src) {
  return src.replace(/\.(mp4|webm|mov|m4v)(\?.*)?$/i, '.srt$2');
}

function cueAt(cues, time) {
  return cues.find((cue) => time >= cue.start && time < cue.end)?.text || '';
}

const CaptionedVideo = ({ captions, className = '', videoClassName, controls, src, ...videoProps }) => {
  const videoRef = useRef(null);
  const [cues, setCues] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (captions === false) return undefined;
    const url = typeof captions === 'string' ? captions : siblingSrt(src);
    if (!url || url === src) return undefined;

    let cancelled = false;
    fetch(url)
      .then((response) => (response.ok ? response.text() : ''))
      .then((raw) => {
        if (!cancelled) setCues(raw ? parseCues(raw) : []);
      })
      .catch(() => {
        if (!cancelled) setCues([]);
      });

    return () => {
      cancelled = true;
    };
  }, [captions, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const next = cueAt(cues, video.currentTime);
    setText((current) => (current === next ? current : next));
  }, [cues]);

  const sync = (event) => {
    const next = cueAt(cues, event.currentTarget.currentTime);
    setText((current) => (current === next ? current : next));
  };

  return (
    <span className={`captioned-video ${controls ? 'captioned-video-controls' : ''} ${className}`.trim()}>
      <video
        {...videoProps}
        ref={videoRef}
        className={videoClassName}
        src={src}
        controls={controls}
        onLoadedMetadata={sync}
        onTimeUpdate={sync}
      />
      {text && <span className="captioned-video-text">{text}</span>}
    </span>
  );
};

export default CaptionedVideo;
