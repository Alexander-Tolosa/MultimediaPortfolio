export const multimediaCourse = {
  title: "Multimedia Systems",
  intro:
    "I'm taking Multimedia Systems as part of my BS Information Technology degree at the University of San Agustin. The course looks at how digital media gets recorded, compressed, and sent to viewers. This page covers what I picked up and the work I produced along the way.",
  learned:
    "The course showed me the whole path digital media takes, from raw signal to the screen. We began with how analog audio and video are turned into digital data through sampling and quantization, and with the broadcast standards behind those formats. Then we moved into information theory and compression. I learned when every bit has to be preserved, using lossless techniques such as Huffman and Run-Length Coding, and when giving up some quality buys a large saving in size, using lossy techniques such as transform coding, JPEG, and MPEG motion compensation. These trade-offs are what make it practical to store media and stream it over networks.",
};

export type ActivityKind = "project" | "activity" | "storyboard" | "infographic";

export interface MultimediaActivity {
  id: string;
  title: string;
  kind: ActivityKind;
  description: string;
  /** Video path under /public, e.g. "/multimedia/blindsided.mp4". */
  video?: string;
  /** Single image path under /public (used for infographics). */
  image?: string;
  /** Display width for `image`: "sm" (default) or "lg" (full width). */
  imageSize?: "sm" | "lg";
  /** Storyboard panel images, in order. */
  panels?: string[];
  /** Embeddable video URL (e.g. a Google Drive /preview link), shown below the image. */
  embed?: string;
  /** Link to a PDF under /public. */
  pdf?: string;
  /** Extra detail paragraphs shown under the description. */
  details?: string[];
}

// To add an activity: drop its files in public/multimedia/ and add an entry here.
export const multimediaActivities: MultimediaActivity[] = [
  {
    id: "king-in-the-making",
    title: "King in the Making",
    kind: "storyboard",
    description:
      "An eight-panel storyboard following a young man through a gym session: arriving, lacing up, lifting, pushing through reps, and finally a well-earned drink. Made with Deghne Gabriel Agana, Aziel Misola and Matthew Tabat.",
    image: "/multimedia/king-in-the-making.png",
    embed: "https://drive.google.com/file/d/1y8KyfPaX9vS4P4bjloRfMs11OkI9CQsD/preview",
    pdf: "/multimedia/king-in-the-making.pdf",
  },
  {
    id: "vox-pop",
    title: "Vox Pop: Man on the Street",
    kind: "activity",
    description:
      "A 60-90 second campus \"Man on the Street\" (vox pop) video featuring interview dialogue, contextual B-roll shots, lower-third graphics, audio ducking, and transitions. Made with Matthew Tabat.",
    embed: "https://drive.google.com/file/d/151my0LAJ3BDIjvGUtBR0HoUXlOgYzEt2/preview",
  },
  {
    id: "sparc-infographic",
    title: "SPARC Infographic",
    kind: "infographic",
    description:
      "Smart Parking Access & Real-Time Count, an RFID-based parking access system proposed for the University of San Agustin (BSIT 3-C).",
    image: "/multimedia/sparc-infographic.png",
    details: [
      "Team: Matthew Tabat, Alexander Michael Tolosa, Aziel Misola and Deghne Gabriel Agana.",
      "Problem: manual ID checks and paper logbooks cause peak-hour bottlenecks, with a delay of over 15 seconds per check, no driver awareness of open slots, and no record of exits.",
      "Solution: drivers tap their existing student or faculty ID on an ESP32 RFID unit. Convex validates the tap, the lane display shows green or red, and a web dashboard syncs available slots in real time.",
      "Timeline: 12 weeks. Budget: hardware 45%, other installation 30%, software 25%. Stack: 13.56 MHz RFID, ESP32, Convex and Next.js.",
    ],
  },
];
