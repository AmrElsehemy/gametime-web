import { ImageResponse } from "next/og";
import { displayName, getGame } from "@/lib/games";

export const alt = "Knowlly Games game preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  const name = game ? displayName(game) : "Knowlly Games";
  const premise = game?.shortDescription ?? "Play something good.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 84px",
          background: "#f7f4ec",
          color: "#22221f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "58%" }}>
          <div style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase", opacity: 0.55 }}>
            Knowlly Games
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 26, letterSpacing: -4 }}>
            {name}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, marginTop: 24, opacity: 0.68 }}>
            {premise}
          </div>
        </div>

        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 60,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            padding: 36,
            gap: 10,
            background: "rgba(255,255,255,0.72)",
            boxShadow: "0 24px 70px rgba(34,34,31,0.14)",
          }}
        >
          {game?.preview === "flags"
            ? flagArt()
            : game?.preview === "bottles"
              ? bottleArt()
              : pebbleArt()}
        </div>
      </div>
    ),
    size,
  );
}

function pebbleArt() {
  return Array.from({ length: 16 }, (_, index) => (
    <div
      key={index}
      style={{
        width: 64,
        height: 64,
        borderRadius: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          index % 5 === 0
            ? "#9d8bd5"
            : index % 4 === 0
              ? "#edc966"
              : index % 3 === 0
                ? "#82c8c6"
                : "#ff9d8d",
      }}
    >
      {index === 2 || index === 13 ? (
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 16,
            background: "#22221f",
          }}
        />
      ) : null}
    </div>
  ));
}

function bottleArt() {
  return Array.from({ length: 4 }, (_, index) => (
    <div
      key={index}
      style={{
        width: 58,
        height: [220, 260, 180, 240][index],
        marginTop: "auto",
        borderRadius: "16px 16px 28px 28px",
        display: "flex",
        background: "linear-gradient(to top, #82c8c6 0%, #82c8c6 25%, #edc966 25%, #edc966 50%, #ff9d8d 50%, #ff9d8d 75%, #9d8bd5 75%)",
      }}
    />
  ));
}

function flagArt() {
  const flags = [
    "linear-gradient(to right, #82c8c6 0%, #82c8c6 33%, #f7f4ec 33%, #f7f4ec 66%, #ff9d8d 66%)",
    "linear-gradient(to bottom, #edc966 0%, #edc966 50%, #9d8bd5 50%)",
    "linear-gradient(to bottom, #ff9d8d 0%, #ff9d8d 33%, #f7f4ec 33%, #f7f4ec 66%, #22221f 66%)",
  ];
  return flags.map((background, index) => (
    <div
      key={index}
      style={{
        width: 288,
        height: 76,
        borderRadius: 12,
        display: "flex",
        background,
      }}
    />
  ));
}
