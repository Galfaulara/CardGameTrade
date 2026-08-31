"use client";
import Image from "next/image";
import { useState } from "react";
import type { CardFace } from "../../features/cards/card-faces";
import styles from "./card-face-viewer.module.css";

const faceImage = (face: CardFace) => face.image_large_uri ?? face.image_normal_uri ?? face.image_small_uri!;
export function CardFaceViewer({ front, back, printingId, canonicalCardId, language }: {
  front: CardFace; back: CardFace; printingId: string; canonicalCardId: string; language: string;
}) {
  const [backVisible, setBackVisible] = useState(false);
  const face = backVisible ? back : front;
  return <section className={styles.viewer} data-printing-id={printingId} data-canonical-card-id={canonicalCardId} data-language={language}>
    <div className={styles.art}>
      <div key={backVisible ? "back" : "front"} className={`${styles.card} ${styles.flipped}`}>
        <Image src={faceImage(face)} alt={`${face.name ?? (backVisible ? "Back" : "Front")} card face`} fill sizes="(max-width: 48rem) 82vw, 360px" unoptimized />
      </div>
      <button type="button" className={styles.flip} aria-pressed={backVisible} aria-label={backVisible ? "Show front face" : "Show back face"} onClick={() => setBackVisible((value) => !value)}>↻ Flip</button>
    </div>
    <div className={styles.details} aria-live="polite">
      <p>{backVisible ? "Back face" : "Front face"}</p>
      <h2>{face.name ?? (backVisible ? "Back face" : "Front face")}</h2>
      {face.type_line ? <strong>{face.type_line}</strong> : null}
      {face.mana_cost ? <span>{face.mana_cost}</span> : null}
      {face.oracle_text ? <div>{face.oracle_text}</div> : null}
      {face.power ? <span>Power / Toughness: {face.power} / {face.toughness}</span> : null}
      {face.loyalty ? <span>Loyalty: {face.loyalty}</span> : null}
      {face.defense ? <span>Defense: {face.defense}</span> : null}
    </div>
  </section>;
}
