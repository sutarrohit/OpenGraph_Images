/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface OpenGraphImageProps {
  params: { postId: string };
}

export default async function Image({ params }: OpenGraphImageProps) {
  const postId = params.postId;

  // Fetch the post data to get the title
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post = await response.json();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid black",
        }}
      >
        <img
          src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2"
          alt="Background Image"
          width={1200}
          height={630}
          style={{ objectFit: "cover", width: "100%", height: "100%" }} // Cover the entire area
        />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Center the text
            color: "red", // Red text color
            margin: 0, // Remove default margin
            fontWeight: "bold", // Bold text
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Text shadow for readability
            textAlign: "center", // Center-align the text
            maxWidth: "80%", // Restrict text width to 80% of the container
            wordBreak: "break-word", // Allow breaking long words to wrap
          }}
        >
          {post.title}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
