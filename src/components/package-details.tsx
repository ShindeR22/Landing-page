"use client";

import Image from "next/image";
import { useRef } from "react";

type PackageDetailsProps = {
  name: string;
  price: string;
  note: string;
  includes: string[];
  imageSrc: string;
};

export function PackageDetails({ name, price, note, includes, imageSrc }: PackageDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `package-details-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      <button className="package-details-trigger" type="button" onClick={() => dialogRef.current?.showModal()}>
        View details <span aria-hidden="true">↗</span>
      </button>
      <dialog className="package-details-dialog" ref={dialogRef} aria-labelledby={titleId} onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}>
        <div className="package-details-content">
          <button className="package-details-close" type="button" aria-label="Close package details" onClick={() => dialogRef.current?.close()}>×</button>
          <div className="package-details-copy">
            <p className="eyebrow">Maternity photography</p>
            <h2 id={titleId}>{name}</h2>
            <p className="package-details-note">{note}</p>
            <p className="package-details-price">{price}</p>
            <ul>{includes.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <p className="package-details-source">The complete package sheet, including photographs and terms, is shown here.</p>
          </div>
          <div className="package-details-image">
            <Image src={imageSrc} alt={`${name} full details and sample maternity photos`} width={788} height={1400} sizes="(max-width: 800px) 90vw, 45vw" />
          </div>
        </div>
      </dialog>
    </>
  );
}
