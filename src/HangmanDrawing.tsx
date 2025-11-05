type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const HEAD = (
    <div
      style={{
        width: "12%",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        border: "0.8vmin solid black",
        position: "absolute",
        top: "10%",
        right: "-6.5%",
      }}
    />
  );

  const BODY = (
    <div
      style={{
        width: "3%",
        height: "25%",
        background: "black",
        position: "absolute",
        top: "21%",
        right: 0,
      }}
    />
  );

  const RIGHT_ARM = (
    <div
      style={{
        width: "20%",
        height: "2%",
        background: "black",
        position: "absolute",
        top: "28%",
        right: "-20%",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_ARM = (
    <div
      style={{
        width: "20%",
        height: "2%",
        background: "black",
        position: "absolute",
        top: "28%",
        right: "3%",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      style={{
        width: "20%",
        height: "2%",
        background: "black",
        position: "absolute",
        top: "43%",
        right: "-20%",
        rotate: "40deg",
        transformOrigin: "left top",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      style={{
        width: "20%",
        height: "2%",
        background: "black",
        position: "absolute",
        top: "43%",
        right: "3%",
        rotate: "-40deg",
        transformOrigin: "right top",
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div
      style={{
        position: "relative",
        width: "clamp(180px, 25vw, 200px)",
        aspectRatio: "3 / 4", // maintains proportions
        margin: "0 auto",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* Rope */}
      <div
        style={{
          position: "absolute",
          height: "10%",
          width: "2%",
          background: "black",
          top: 0,
          right: 0,
        }}
      />
      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          height: "3%",
          width: "60%",
          background: "black",
          top: 0,
          right: 0,
        }}
      />
      {/* Vertical pole */}
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "3%",
          background: "black",
          top: 0,
          right: "60%",
        }}
      />
      {/* Base */}
      <div
        style={{
          position: "absolute",
          height: "3%",
          width: "80%",
          background: "black",
          bottom: 0,
          right: "40%",
          transform: "translateX(50%)",
        }}
      />
    </div>
  );
}
