import hyperHTML from 'hyperhtml';

function technologiesSVG(props) {
  return hyperHTML.wire(
    props,
    'svg',
  )`<svg width="379" height="55" viewBox="0 0 379 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path {id=${props.name} className="st1" d="M0.944 16.48C2.52267 16.1387 3.90933 15.7547 5.104 15.328C6.29867 14.9013 7.38667 14.368 8.368 13.728C9.392 13.088 10.352 12.2987 11.248 11.36C12.1867 10.4213 13.1893 9.26933 14.256 7.904H20.848L18.992 16.48H23.984L23.152 20.768H18.096L15.472 33.248C15.2587 34.2293 15.088 35.104 14.96 35.872C14.832 36.64 14.768 37.2373 14.768 37.664C14.768 38.5173 15.0667 39.0507 15.664 39.264C16.304 39.4773 17.4773 39.584 19.184 39.584L18.224 44C17.9253 44.0853 17.456 44.1493 16.816 44.192C16.2187 44.2347 15.536 44.2773 14.768 44.32C14.0427 44.4053 13.2747 44.448 12.464 44.448C11.696 44.4907 11.0133 44.512 10.416 44.512C9.34933 44.512 8.304 44.4267 7.28 44.256C6.256 44.128 5.33867 43.8507 4.528 43.424C3.71733 42.9547 3.056 42.2933 2.544 41.44C2.07467 40.5867 1.84 39.4347 1.84 37.984C1.84 37.472 1.86133 36.832 1.904 36.064C1.98933 35.296 2.13867 34.4427 2.352 33.504L5.04 20.768H0.0480001L0.944 16.48ZM36.452 31.136C36.2813 32.0747 36.1533 32.9707 36.068 33.824C36.0253 34.6773 36.004 35.4453 36.004 36.128C36.004 36.512 36.0253 36.9387 36.068 37.408C36.1107 37.8773 36.196 38.3253 36.324 38.752C36.4947 39.136 36.708 39.4773 36.964 39.776C37.2627 40.032 37.668 40.16 38.18 40.16C38.564 40.16 38.9907 40.032 39.46 39.776C39.972 39.52 40.4627 39.1573 40.932 38.688C41.444 38.2187 41.9133 37.6427 42.34 36.96C42.8093 36.2773 43.172 35.5093 43.428 34.656H53.924L52.26 41.504C51.4067 42.0587 50.4253 42.528 49.316 42.912C48.2067 43.296 47.0333 43.616 45.796 43.872C44.5587 44.0853 43.3 44.2347 42.02 44.32C40.74 44.448 39.524 44.512 38.372 44.512C36.2387 44.512 34.2547 44.32 32.42 43.936C30.5853 43.552 28.9853 42.8907 27.62 41.952C26.2547 41.0133 25.1667 39.776 24.356 38.24C23.588 36.6613 23.204 34.72 23.204 32.416C23.204 30.3253 23.524 28.2773 24.164 26.272C24.8467 24.2667 25.956 22.496 27.492 20.96C29.0707 19.3813 31.1613 18.1227 33.764 17.184C36.4093 16.2453 39.6947 15.776 43.62 15.776C47.8867 15.776 51.0867 16.4373 53.22 17.76C55.396 19.0827 56.484 21.152 56.484 23.968C56.484 25.12 56.3133 26.3787 55.972 27.744C55.6307 29.0667 55.1187 30.1973 54.436 31.136H36.452ZM44.964 23.52C44.964 22.1973 44.7507 21.3013 44.324 20.832C43.8973 20.3627 43.3853 20.128 42.788 20.128C42.1053 20.128 41.4653 20.3627 40.868 20.832C40.3133 21.2587 39.8013 21.856 39.332 22.624C38.8627 23.3493 38.436 24.2027 38.052 25.184C37.668 26.1227 37.348 27.1253 37.092 28.192H44.388C44.4733 27.68 44.5587 27.1467 44.644 26.592C44.7293 26.1227 44.7933 25.6107 44.836 25.056C44.9213 24.5013 44.964 23.9893 44.964 23.52ZM85.916 42.464C84.124 43.1893 82.2253 43.7013 80.22 44C78.2573 44.3413 76.0173 44.512 73.5 44.512C71.2813 44.512 69.2333 44.2987 67.356 43.872C65.5213 43.4027 63.9213 42.6773 62.556 41.696C61.1907 40.7147 60.124 39.456 59.356 37.92C58.588 36.3413 58.204 34.4427 58.204 32.224C58.204 29.92 58.588 27.7867 59.356 25.824C60.1667 23.8187 61.3613 22.0693 62.94 20.576C64.5613 19.0827 66.6093 17.9093 69.084 17.056C71.5587 16.2027 74.5027 15.776 77.916 15.776C80.6893 15.776 83.1 16.0107 85.148 16.48C87.196 16.9067 88.8813 17.9093 90.204 19.488L88.412 27.68H79.708C79.7507 26.9547 79.7933 26.3147 79.836 25.76C79.8787 25.2053 79.9 24.5867 79.9 23.904C79.9 22.5387 79.7507 21.5787 79.452 21.024C79.1533 20.4267 78.6627 20.128 77.98 20.128C76.7853 20.128 75.74 20.7253 74.844 21.92C73.948 23.072 73.2013 24.48 72.604 26.144C72.0493 27.7653 71.6227 29.4933 71.324 31.328C71.068 33.12 70.94 34.656 70.94 35.936C70.94 36.4053 70.9613 36.896 71.004 37.408C71.0467 37.8773 71.132 38.3253 71.26 38.752C71.4307 39.1787 71.644 39.52 71.9 39.776C72.156 40.032 72.5187 40.16 72.988 40.16C73.4147 40.16 73.9053 40.032 74.46 39.776C75.0147 39.52 75.548 39.136 76.06 38.624C76.572 38.0693 77.0627 37.3653 77.532 36.512C78.0013 35.6587 78.364 34.6347 78.62 33.44H87.772L85.916 42.464ZM108.283 20.576H108.731C109.542 19.7653 110.48 19.0187 111.547 18.336C112.443 17.7387 113.51 17.2053 114.747 16.736C115.984 16.2667 117.371 16.032 118.907 16.032C121.126 16.032 122.96 16.608 124.411 17.76C125.862 18.8693 126.587 20.4053 126.587 22.368C126.587 22.9653 126.523 23.648 126.395 24.416C126.267 25.1413 126.118 25.9307 125.947 26.784C125.776 27.5947 125.584 28.4267 125.371 29.28C125.2 30.0907 125.051 30.8373 124.923 31.52L122.235 44H109.243L112.763 27.296C112.848 26.7413 112.955 26.1867 113.083 25.632C113.211 25.0347 113.275 24.5013 113.275 24.032C113.275 23.392 113.104 22.88 112.763 22.496C112.464 22.0693 111.995 21.856 111.355 21.856C110.587 21.856 109.84 22.1333 109.115 22.688C108.432 23.2427 107.899 23.7333 107.515 24.16L103.291 44H90.235L99.323 0.991997H112.443L108.283 20.576ZM145.527 20.576C146.423 19.7227 147.426 18.9333 148.535 18.208C149.516 17.6107 150.668 17.056 151.991 16.544C153.314 16.032 154.786 15.776 156.407 15.776C158.626 15.776 160.46 16.352 161.911 17.504C163.362 18.6133 164.087 20.1493 164.087 22.112C164.087 22.6667 164.023 23.3493 163.895 24.16C163.767 24.928 163.618 25.7387 163.447 26.592C163.276 27.4453 163.084 28.32 162.871 29.216C162.7 30.0693 162.551 30.8373 162.423 31.52L159.735 44H146.743L150.263 27.296C150.348 26.7413 150.455 26.1867 150.583 25.632C150.711 25.0347 150.775 24.5013 150.775 24.032C150.775 23.392 150.604 22.88 150.263 22.496C149.964 22.0693 149.495 21.856 148.855 21.856C148.087 21.856 147.34 22.1333 146.615 22.688C145.932 23.2427 145.399 23.712 145.015 24.096L140.791 44H127.735L133.559 16.48H143.991L145.143 20.576H145.527ZM186.035 15.776C191.112 15.776 194.803 16.672 197.107 18.464C199.539 20.3413 200.755 23.456 200.755 27.808C200.755 30.496 200.307 32.928 199.411 35.104C198.515 37.2373 197.256 39.008 195.635 40.416C192.392 43.1467 187.699 44.512 181.555 44.512C176.307 44.512 172.552 43.5093 170.291 41.504C167.859 39.4133 166.643 36.2773 166.643 32.096C166.643 29.3227 167.198 26.8053 168.307 24.544C169.459 22.2827 171.102 20.4053 173.235 18.912C176.35 16.8213 180.616 15.776 186.035 15.776ZM181.683 40.16C182.75 40.16 183.667 39.5627 184.435 38.368C185.246 37.1733 185.886 35.7227 186.355 34.016C186.824 32.2667 187.166 30.4747 187.379 28.64C187.635 26.7627 187.763 25.1413 187.763 23.776C187.763 22.5813 187.635 21.6853 187.379 21.088C187.166 20.448 186.675 20.128 185.907 20.128C184.755 20.128 183.752 20.7467 182.899 21.984C182.088 23.2213 181.427 24.6933 180.915 26.4C180.403 28.1067 180.019 29.856 179.763 31.648C179.55 33.44 179.443 34.8907 179.443 36C179.443 38.7733 180.19 40.16 181.683 40.16ZM215.104 44H202.047L211.135 0.991997H224.256L215.104 44ZM241.598 15.776C246.675 15.776 250.366 16.672 252.67 18.464C255.102 20.3413 256.318 23.456 256.318 27.808C256.318 30.496 255.87 32.928 254.974 35.104C254.078 37.2373 252.819 39.008 251.198 40.416C247.955 43.1467 243.262 44.512 237.118 44.512C231.87 44.512 228.115 43.5093 225.854 41.504C223.422 39.4133 222.206 36.2773 222.206 32.096C222.206 29.3227 222.76 26.8053 223.87 24.544C225.022 22.2827 226.664 20.4053 228.798 18.912C231.912 16.8213 236.179 15.776 241.598 15.776ZM237.246 40.16C238.312 40.16 239.23 39.5627 239.998 38.368C240.808 37.1733 241.448 35.7227 241.918 34.016C242.387 32.2667 242.728 30.4747 242.942 28.64C243.198 26.7627 243.326 25.1413 243.326 23.776C243.326 22.5813 243.198 21.6853 242.942 21.088C242.728 20.448 242.238 20.128 241.47 20.128C240.318 20.128 239.315 20.7467 238.462 21.984C237.651 23.2213 236.99 24.6933 236.478 26.4C235.966 28.1067 235.582 29.856 235.326 31.648C235.112 33.44 235.006 34.8907 235.006 36C235.006 38.7733 235.752 40.16 237.246 40.16ZM284.362 16.48H294.73L289.482 41.376C289.098 43.296 288.458 45.0667 287.562 46.688C286.666 48.3093 285.407 49.7173 283.786 50.912C282.207 52.1067 280.202 53.0453 277.77 53.728C275.381 54.4107 272.458 54.752 269.002 54.752C268.362 54.752 267.594 54.7307 266.698 54.688C265.802 54.688 264.885 54.6667 263.946 54.624C263.007 54.624 262.111 54.6027 261.258 54.56C260.405 54.5173 259.722 54.4747 259.21 54.432L260.426 49.824C261.791 50.0373 263.178 50.144 264.586 50.144C266.037 50.1867 267.274 50.208 268.298 50.208C269.578 50.208 270.645 50.08 271.498 49.824C272.394 49.6107 273.119 49.248 273.674 48.736C274.271 48.224 274.741 47.5413 275.082 46.688C275.466 45.8347 275.765 44.7893 275.978 43.552L276.746 39.392H276.298C276.042 39.776 275.658 40.2453 275.146 40.8C274.677 41.312 274.058 41.824 273.29 42.336C272.522 42.8053 271.605 43.2107 270.538 43.552C269.514 43.8507 268.341 44 267.018 44C265.525 44 264.245 43.7867 263.178 43.36C262.154 42.8907 261.322 42.272 260.682 41.504C260.042 40.6933 259.573 39.7547 259.274 38.688C258.975 37.5787 258.826 36.384 258.826 35.104C258.826 34.5493 258.869 33.696 258.954 32.544C259.039 31.392 259.231 30.0907 259.53 28.64C259.871 27.1893 260.341 25.7173 260.938 24.224C261.578 22.688 262.41 21.3013 263.434 20.064C264.501 18.8267 265.802 17.8027 267.338 16.992C268.917 16.1813 270.815 15.776 273.034 15.776C273.717 15.776 274.463 15.84 275.274 15.968C276.085 16.096 276.874 16.3307 277.642 16.672C278.41 17.0133 279.093 17.504 279.69 18.144C280.287 18.784 280.757 19.616 281.098 20.64H281.482L284.362 16.48ZM277.194 22.048C276.17 22.048 275.317 22.6027 274.634 23.712C273.951 24.7787 273.397 26.0373 272.97 27.488C272.543 28.9387 272.223 30.3893 272.01 31.84C271.839 33.248 271.754 34.2933 271.754 34.976C271.754 35.8293 271.882 36.5547 272.138 37.152C272.437 37.7067 272.949 37.984 273.674 37.984C274.101 37.984 274.506 37.8773 274.89 37.664C275.317 37.4507 275.701 37.216 276.042 36.96C276.426 36.6613 276.746 36.3627 277.002 36.064C277.301 35.7653 277.514 35.5307 277.642 35.36L280.01 24.16C279.669 23.6907 279.263 23.2213 278.794 22.752C278.367 22.2827 277.834 22.048 277.194 22.048ZM307.602 44H294.61L300.434 16.48H313.554L307.602 44ZM315.218 8.096C315.218 9.07733 315.005 9.93066 314.578 10.656C314.194 11.3813 313.661 12 312.978 12.512C312.338 13.024 311.591 13.408 310.738 13.664C309.885 13.92 309.01 14.048 308.114 14.048C306.407 14.048 304.978 13.6427 303.826 12.832C302.674 12.0213 302.098 10.7413 302.098 8.992C302.098 8.05333 302.29 7.22133 302.674 6.496C303.058 5.728 303.57 5.10933 304.21 4.64C304.893 4.128 305.661 3.744 306.514 3.488C307.41 3.232 308.327 3.104 309.266 3.104C310.93 3.104 312.338 3.50933 313.49 4.32C314.642 5.13067 315.218 6.38933 315.218 8.096ZM327.952 31.136C327.781 32.0747 327.653 32.9707 327.568 33.824C327.525 34.6773 327.504 35.4453 327.504 36.128C327.504 36.512 327.525 36.9387 327.568 37.408C327.611 37.8773 327.696 38.3253 327.824 38.752C327.995 39.136 328.208 39.4773 328.464 39.776C328.763 40.032 329.168 40.16 329.68 40.16C330.064 40.16 330.491 40.032 330.96 39.776C331.472 39.52 331.963 39.1573 332.432 38.688C332.944 38.2187 333.413 37.6427 333.84 36.96C334.309 36.2773 334.672 35.5093 334.928 34.656H345.424L343.76 41.504C342.907 42.0587 341.925 42.528 340.816 42.912C339.707 43.296 338.533 43.616 337.296 43.872C336.059 44.0853 334.8 44.2347 333.52 44.32C332.24 44.448 331.024 44.512 329.872 44.512C327.739 44.512 325.755 44.32 323.92 43.936C322.085 43.552 320.485 42.8907 319.12 41.952C317.755 41.0133 316.667 39.776 315.856 38.24C315.088 36.6613 314.704 34.72 314.704 32.416C314.704 30.3253 315.024 28.2773 315.664 26.272C316.347 24.2667 317.456 22.496 318.992 20.96C320.571 19.3813 322.661 18.1227 325.264 17.184C327.909 16.2453 331.195 15.776 335.12 15.776C339.387 15.776 342.587 16.4373 344.72 17.76C346.896 19.0827 347.984 21.152 347.984 23.968C347.984 25.12 347.813 26.3787 347.472 27.744C347.131 29.0667 346.619 30.1973 345.936 31.136H327.952ZM336.464 23.52C336.464 22.1973 336.251 21.3013 335.824 20.832C335.397 20.3627 334.885 20.128 334.288 20.128C333.605 20.128 332.965 20.3627 332.368 20.832C331.813 21.2587 331.301 21.856 330.832 22.624C330.363 23.3493 329.936 24.2027 329.552 25.184C329.168 26.1227 328.848 27.1253 328.592 28.192H335.888C335.973 27.68 336.059 27.1467 336.144 26.592C336.229 26.1227 336.293 25.6107 336.336 25.056C336.421 24.5013 336.464 23.9893 336.464 23.52ZM368.648 24.544C368.691 24.3307 368.733 24.1173 368.776 23.904C368.819 23.6907 368.84 23.456 368.84 23.2C368.84 22.432 368.691 21.728 368.392 21.088C368.136 20.4053 367.603 20.064 366.792 20.064C366.067 20.064 365.341 20.384 364.616 21.024C363.891 21.6213 363.528 22.432 363.528 23.456C363.528 24.1387 363.699 24.6933 364.04 25.12C364.424 25.504 364.915 25.824 365.512 26.08C366.109 26.336 366.771 26.5493 367.496 26.72C368.264 26.8907 369.011 27.0613 369.736 27.232C370.76 27.488 371.72 27.808 372.616 28.192C373.555 28.5333 374.387 29.0027 375.112 29.6C375.837 30.1973 376.413 30.944 376.84 31.84C377.267 32.6933 377.48 33.76 377.48 35.04C377.48 36.832 377.053 38.3467 376.2 39.584C375.389 40.7787 374.237 41.76 372.744 42.528C371.293 43.2533 369.565 43.7653 367.56 44.064C365.597 44.3627 363.485 44.512 361.224 44.512C357.768 44.512 354.909 44.256 352.648 43.744C350.387 43.232 348.808 42.7413 347.912 42.272L349.256 35.872H357.896C357.853 36.0853 357.832 36.2987 357.832 36.512C357.832 36.6827 357.832 36.8747 357.832 37.088C357.832 38.0693 358.045 38.8587 358.472 39.456C358.941 40.0107 359.731 40.288 360.84 40.288C362.077 40.288 362.952 39.9467 363.464 39.264C364.019 38.5387 364.296 37.8773 364.296 37.28C364.296 36.6827 364.061 36.1707 363.592 35.744C363.165 35.2747 362.611 34.8907 361.928 34.592C361.245 34.2507 360.477 33.9733 359.624 33.76C358.813 33.504 358.024 33.2693 357.256 33.056C356.701 32.928 356.061 32.7147 355.336 32.416C354.653 32.1173 353.992 31.6907 353.352 31.136C352.712 30.5813 352.179 29.8773 351.752 29.024C351.325 28.128 351.112 27.0187 351.112 25.696C351.112 23.8187 351.56 22.2613 352.456 21.024C353.395 19.744 354.589 18.72 356.04 17.952C357.533 17.184 359.197 16.6293 361.032 16.288C362.909 15.9467 364.787 15.776 366.664 15.776C369.011 15.776 371.229 15.9893 373.32 16.416C375.411 16.8427 377.117 17.3973 378.44 18.08L376.968 24.544H368.648Z" />
</svg>
`;
}

export default technologiesSVG;