"use client";

import { useCallback, useRef } from "react";

/**
 * Maps horizontal pointer position within a track element to a 0..1 progress
 * value. Used by the project demos for drag-driven readouts (aperture,
 * threshold, etc.) instead of a native <input type="range">, so the track
 * can carry the poster's own visual language.
 */
export function useTrackDrag(onChange: (progress: number) => void) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const update = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      onChange(p);
    },
    [onChange],
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      draggingRef.current = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      update(e.clientX);
    },
    [update],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!draggingRef.current) return;
      update(e.clientX);
    },
    [update],
  );

  const onPointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  return { trackRef, onPointerDown, onPointerMove, onPointerUp };
}

/** Maps pointer position to an angle (degrees) around a fixed pivot point. */
export function angleFromPivot(
  pivot: { x: number; y: number },
  point: { x: number; y: number },
) {
  const dx = point.x - pivot.x;
  const dy = point.y - pivot.y;
  return (Math.atan2(dx, dy) * 180) / Math.PI;
}
