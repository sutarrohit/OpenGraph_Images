// /* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from "next/og";

export default async function Image() {
  const logoUrl = "https://storage.googleapis.com/termix-prod/metaImage.png";

  // Fetch the image data from the remote URL
  const response = await fetch(logoUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch image from ${logoUrl}`);
  }

  const logoArrayBuffer = await response.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoUrl} height={630} width={1200} />
      </div>
    )
  );
}

// import { ImageResponse } from "next/og";
// export const runtime = "edge";

// // Image metadata
// export const alt = "About Acme";
// export const size = {
//   width: 1200,
//   height: 630,
// };

// export const contentType = "image/png";

// // Image generation
// export default async function Image() {
//   return new ImageResponse(
//     (
//       // ImageResponse JSX element
//       <div
//         style={{
//           fontSize: 128,
//           background: "white",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           border: "1px solid black",
//           position: "relative",
//         }}
//       >
//         <img
//           src="https://storage.googleapis.com/termix-prod/metaImage.png"
//           alt="About Acme"
//           width={1200}
//           height={630}
//           style={{ objectFit: "cover" }} // Ensure the image fits nicely
//         />
//         <p
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "red",
//             margin: 0,
//             fontWeight: "bold",
//             textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//             width: "100%",
//             textAlign: "center",
//           }}
//         >
//           This is Generated Image
//         </p>
//       </div>
//     ),
//     // ImageResponse options
//     {
//       // For convenience, we can re-use the exported opengraph-image
//       // size config to also set the ImageResponse's width and height.
//       ...size,
//     }
//   );
// }
