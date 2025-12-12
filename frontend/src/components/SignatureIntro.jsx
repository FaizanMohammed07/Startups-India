import { useEffect, useState } from "react";

const heroName = "Ravi Tilekar";
const heroDescriptor = "Founder • Entrepreneur • Ecosystem Builder • Writer";

export default function SignatureIntro() {
  const [nameDisplay, setNameDisplay] = useState("");
  const [descriptorDisplay, setDescriptorDisplay] = useState("");

  useEffect(() => {
    let nameIndex = 0;
    let descriptorIndex = 0;
    let descriptorInterval;

    const nameInterval = setInterval(() => {
      setNameDisplay((prev) => prev + heroName[nameIndex]);
      nameIndex += 1;
      if (nameIndex >= heroName.length) {
        clearInterval(nameInterval);
        descriptorInterval = setInterval(() => {
          setDescriptorDisplay(
            (prev) => prev + heroDescriptor[descriptorIndex]
          );
          descriptorIndex += 1;
          if (descriptorIndex >= heroDescriptor.length) {
            clearInterval(descriptorInterval);
          }
        }, 70);
      }
    }, 80);

    return () => {
      clearInterval(nameInterval);
      if (descriptorInterval) clearInterval(descriptorInterval);
    };
  }, []);

  return (
    <div className="signature-wrap intro">
      <div className="signature-card">
        <p className="signature name">
          {nameDisplay}
          <span className="caret" />
        </p>
        <p className="signature descriptor">{descriptorDisplay}</p>
        <div className="signature-glow" aria-hidden />
      </div>
    </div>
  );
}
