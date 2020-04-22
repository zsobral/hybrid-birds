import React from 'react'

export const Times = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export const Egg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    <g>
      <g>
        <path
          d="M16,0C9.122,0,3.884,13.252,3.884,19.884C3.884,26.564,9.32,32,16,32c6.68,0,12.116-5.436,12.116-12.116
			C28.116,13.252,22.878,0,16,0z M16,30.012c-5.585,0-10.129-4.543-10.129-10.128c0-5.741,4.792-17.896,10.129-17.896
			c5.337,0,10.129,12.155,10.129,17.896C26.129,25.469,21.585,30.012,16,30.012z"
        />
        <rect x="14.096" y="19.511" width="3.386" height="3.222" />
        <path
          d="M19.417,11.968c-0.336-0.331-0.775-0.602-1.318-0.812c-0.542-0.212-1.21-0.317-2.001-0.317
			c-0.804,0-1.484,0.122-2.043,0.366s-1.017,0.561-1.375,0.952c-0.357,0.391-0.624,0.833-0.797,1.327
			c-0.174,0.494-0.277,0.995-0.31,1.505h3.401c-0.033-0.358,0.032-0.678,0.195-0.96c0.162-0.282,0.439-0.423,0.83-0.423
			c0.629,0,0.943,0.276,0.943,0.83c0,0.185-0.056,0.342-0.163,0.472c-0.109,0.13-0.242,0.242-0.399,0.333
			c-0.157,0.092-0.322,0.177-0.496,0.252c-0.174,0.075-0.325,0.146-0.456,0.211c-0.314,0.174-0.553,0.391-0.716,0.65
			c-0.162,0.261-0.276,0.526-0.342,0.797c-0.064,0.271-0.098,0.537-0.098,0.798c0,0.25,0.006,0.456,0.017,0.618h3.011
			c0-0.185,0.015-0.347,0.04-0.487c0.027-0.142,0.072-0.267,0.139-0.375c0.065-0.108,0.157-0.211,0.276-0.31
			c0.12-0.098,0.271-0.194,0.456-0.293c0.271-0.141,0.537-0.278,0.798-0.414s0.496-0.307,0.707-0.513
			c0.212-0.206,0.383-0.464,0.513-0.773c0.131-0.309,0.195-0.713,0.195-1.212c-0.021-0.358-0.111-0.735-0.27-1.131
			S19.753,12.299,19.417,11.968z"
        />
      </g>
    </g>
  </svg>
)

export const ChevronLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

export const ChevronRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

export const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

export const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)
