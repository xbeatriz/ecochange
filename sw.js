self.addEventListener("install", (event) => {
  console.log("Install event:", event);
});

self.addEventListener("activate", (event) => {
  console.log("Activate event:", event);
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch event:", event);
});
