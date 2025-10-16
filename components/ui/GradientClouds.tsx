export function GradientClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -left-20 -top-20 h-96 w-96 opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cloud1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDEFFF" />
            <stop offset="100%" stopColor="#00B3A4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#cloud1)"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,87.1C-21.6,86.6,-36.8,82.6,-49.9,74.6C-63,66.6,-74,54.6,-80.8,40.4C-87.6,26.2,-90.2,9.8,-88.7,-5.9C-87.2,-21.6,-81.6,-36.6,-72.8,-49.4C-64,-62.2,-52,-72.8,-38.4,-80.3C-24.8,-87.8,-9.6,-92.2,4.3,-99.1C18.2,-106,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute -bottom-20 -right-20 h-96 w-96 opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cloud2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7EA" />
            <stop offset="100%" stopColor="#00B3A4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#cloud2)"
          d="M39.5,-65.6C51.4,-58.2,61.3,-47.3,68.4,-34.8C75.5,-22.3,79.8,-8.2,79.9,6C80,20.2,75.9,34.5,68.2,46.8C60.5,59.1,49.2,69.4,36.2,75.8C23.2,82.2,8.5,84.7,-5.8,84.1C-20.1,83.5,-34,79.8,-46.8,72.8C-59.6,65.8,-71.3,55.5,-78.4,42.6C-85.5,29.7,-88,14.2,-86.8,-0.8C-85.6,-15.8,-80.7,-30.3,-72.5,-42.6C-64.3,-54.9,-52.8,-65,-40.1,-71.8C-27.4,-78.6,-13.7,-82.1,0.3,-82.6C14.3,-83.1,27.6,-73,39.5,-65.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}
