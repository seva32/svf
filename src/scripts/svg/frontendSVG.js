import hyperHTML from 'hyperhtml';

function frontendSVG(props) {
  return hyperHTML.wire(
    props,
    'svg',
  )`<svg width="370" height="45" viewBox="0 0 370 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id=${props.name} className="st1" d="M43.728 1.376C45.3067 1.376 46.5227 1.71733 47.376 2.4C48.272 3.08267 48.72 4.02133 48.72 5.216C48.72 5.81333 48.6347 6.38933 48.464 6.944L46.8 12.896C46.5013 14.0053 46.0107 14.7947 45.328 15.264C44.6453 15.7333 43.7493 15.968 42.64 15.968C41.5733 15.968 40.72 15.7547 40.08 15.328C39.44 14.8587 38.9707 14.112 38.672 13.088L37.648 9.44C37.4773 8.8 37.264 8.37333 37.008 8.16C36.752 7.94667 36.2187 7.84 35.408 7.84H29.008L25.424 20.512H26.64C27.2373 20.512 27.7493 20.4267 28.176 20.256C28.6453 20.0853 29.136 19.7653 29.648 19.296L31.632 17.632C32.3573 16.992 32.9973 16.544 33.552 16.288C34.1493 15.9893 34.768 15.84 35.408 15.84C36.2187 15.84 36.88 16.0747 37.392 16.544C37.9467 17.0133 38.224 17.6747 38.224 18.528C38.224 18.8693 38.16 19.2747 38.032 19.744L35.216 29.472C34.576 31.5627 33.424 32.608 31.76 32.608C30.3947 32.608 29.328 31.904 28.56 30.496L27.408 28.32C27.1093 27.7227 26.832 27.3387 26.576 27.168C26.32 26.9973 25.936 26.912 25.424 26.912H23.568L20.88 36.448C20.7947 36.704 20.752 37.0453 20.752 37.472C20.752 38.0693 20.88 38.56 21.136 38.944C21.4347 39.328 21.8613 39.7333 22.416 40.16C22.8853 40.544 23.2053 40.864 23.376 41.12C23.5467 41.3333 23.632 41.6107 23.632 41.952C23.632 42.72 23.2907 43.2533 22.608 43.552C21.9253 43.8507 20.9227 44 19.6 44H3.536C2.42667 44 1.59467 43.808 1.04 43.424C0.485333 42.9973 0.293333 42.4213 0.464 41.696C0.549333 41.312 0.72 41.0133 0.976 40.8C1.18933 40.544 1.53067 40.2667 2 39.968C2.72533 39.5413 3.30133 39.0933 3.728 38.624C4.15467 38.1547 4.496 37.4293 4.752 36.448L12.624 8.864C12.7947 8.30933 12.88 7.79733 12.88 7.328C12.88 6.816 12.7947 6.38933 12.624 6.048C12.496 5.70667 12.2827 5.344 11.984 4.96C11.6 4.40533 11.408 3.95733 11.408 3.616C11.408 3.488 11.4507 3.25333 11.536 2.912C11.7067 2.35733 12.0907 1.97333 12.688 1.76C13.2853 1.504 14.16 1.376 15.312 1.376H43.728ZM91.271 14.368C90.5883 16.8427 89.3083 18.784 87.431 20.192C85.5537 21.5573 83.1857 22.4107 80.327 22.752C82.375 22.9227 83.911 23.52 84.935 24.544C85.959 25.568 86.471 26.912 86.471 28.576C86.471 29.216 86.3643 30.0053 86.151 30.944L85.447 34.08C85.3617 34.5067 85.319 34.8053 85.319 34.976C85.319 35.5307 85.447 35.9573 85.703 36.256C85.959 36.512 86.3217 36.64 86.791 36.64C87.687 36.64 88.327 36.768 88.711 37.024C89.1377 37.28 89.287 37.7493 89.159 38.432C88.9883 39.4133 88.4763 40.3733 87.623 41.312C86.7697 42.2507 85.5537 43.04 83.975 43.68C82.439 44.2773 80.5617 44.576 78.343 44.576C75.527 44.576 73.287 43.9573 71.623 42.72C69.959 41.44 69.127 39.6267 69.127 37.28C69.127 36.384 69.255 35.424 69.511 34.4L70.535 30.304C70.7057 29.7493 70.791 29.1733 70.791 28.576C70.791 27.5947 70.4497 26.8907 69.767 26.464C69.127 26.0373 68.0817 25.824 66.631 25.824H64.199L61.255 36.448C61.1697 36.704 61.127 37.024 61.127 37.408C61.127 38.0053 61.2763 38.5173 61.575 38.944C61.8737 39.3707 62.279 39.8187 62.791 40.288C63.175 40.5867 63.4737 40.8853 63.687 41.184C63.9003 41.44 64.007 41.7173 64.007 42.016C64.007 42.7413 63.6657 43.2533 62.983 43.552C62.3003 43.8507 61.2977 44 59.975 44H43.911C42.8017 44 41.9697 43.808 41.415 43.424C40.8603 42.9973 40.6683 42.4213 40.839 41.696C40.9243 41.312 41.095 41.0133 41.351 40.8C41.5643 40.544 41.9057 40.2667 42.375 39.968C43.1003 39.5413 43.6763 39.0933 44.103 38.624C44.5297 38.1547 44.871 37.4293 45.127 36.448L52.935 8.864C53.1057 8.30933 53.191 7.776 53.191 7.264C53.191 6.79467 53.1057 6.41066 52.935 6.112C52.807 5.77067 52.615 5.38667 52.359 4.96C51.975 4.40533 51.783 3.95733 51.783 3.616C51.783 3.488 51.8257 3.25333 51.911 2.912C52.0817 2.35733 52.4443 1.97333 52.999 1.76C53.5963 1.504 54.4923 1.376 55.687 1.376H77.127C80.071 1.376 82.631 1.824 84.807 2.72C87.0257 3.616 88.711 4.85333 89.863 6.432C91.0577 7.968 91.655 9.71733 91.655 11.68C91.655 12.576 91.527 13.472 91.271 14.368ZM74.887 13.728C75.1003 12.7467 75.207 12 75.207 11.488C75.207 9.22666 73.9697 8.096 71.495 8.096H68.807L65.991 19.424H68.679C70.343 19.424 71.6443 19.0187 72.583 18.208C73.5643 17.3973 74.3323 15.904 74.887 13.728ZM120.856 0.415997C126.232 0.415997 130.434 1.696 133.464 4.256C136.493 6.77333 138.008 10.4213 138.008 15.2C138.008 17.4613 137.666 19.8933 136.984 22.496C135.704 27.2747 133.72 31.328 131.032 34.656C128.344 37.984 125.144 40.5013 121.432 42.208C117.72 43.9147 113.688 44.768 109.336 44.768C104.002 44.768 99.8208 43.5093 96.7915 40.992C93.7622 38.432 92.2475 34.7627 92.2475 29.984C92.2475 27.808 92.6102 25.312 93.3355 22.496C94.5728 17.76 96.5142 13.7493 99.1595 10.464C101.848 7.136 105.026 4.64 108.696 2.976C112.408 1.26933 116.461 0.415997 120.856 0.415997ZM119.704 6.688C118.424 6.688 117.272 7.2 116.248 8.224C115.224 9.248 114.2 10.9333 113.176 13.28C112.194 15.584 111.128 18.8053 109.976 22.944C108.269 28.9173 107.416 33.0347 107.416 35.296C107.416 36.6187 107.65 37.5787 108.12 38.176C108.589 38.7733 109.336 39.072 110.36 39.072C111.64 39.072 112.792 38.56 113.816 37.536C114.84 36.4693 115.842 34.784 116.824 32.48C117.805 30.176 118.893 26.9973 120.088 22.944C121.752 17.056 122.583 12.9173 122.583 10.528C122.583 9.16267 122.349 8.18133 121.88 7.584C121.41 6.98667 120.685 6.688 119.704 6.688ZM183.919 1.376C185.668 1.376 186.543 1.93067 186.543 3.04C186.543 3.33867 186.521 3.552 186.479 3.68C186.351 4.10667 186.159 4.448 185.903 4.704C185.647 4.91733 185.284 5.17333 184.815 5.472C184.175 5.856 183.641 6.28266 183.215 6.752C182.788 7.22133 182.425 7.94666 182.127 8.928L174.191 37.344C173.465 39.904 172.548 41.696 171.439 42.72C170.372 43.744 168.879 44.256 166.958 44.256C165.252 44.256 163.823 43.7653 162.671 42.784C161.561 41.76 160.516 40.2027 159.535 38.112L149.871 17.76L144.495 36.448C144.367 37.0027 144.303 37.4933 144.303 37.92C144.303 38.4747 144.388 38.944 144.559 39.328C144.772 39.6693 145.049 40.032 145.391 40.416C145.86 40.9707 146.095 41.44 146.095 41.824C146.095 42.08 146.073 42.272 146.031 42.4C145.86 42.9973 145.476 43.424 144.879 43.68C144.281 43.8933 143.385 44 142.191 44H135.215C133.465 44 132.59 43.4453 132.59 42.336C132.59 42.0373 132.612 41.824 132.654 41.696C132.782 41.2693 132.974 40.9493 133.23 40.736C133.486 40.48 133.849 40.2027 134.319 39.904C134.959 39.52 135.492 39.0933 135.919 38.624C136.345 38.1547 136.708 37.4293 137.007 36.448L145.135 7.712L144.111 5.6C143.684 4.74667 143.47 4 143.47 3.36C143.47 2.03733 144.324 1.376 146.031 1.376H155.503C156.868 1.376 157.892 1.696 158.575 2.336C159.3 2.93333 160.068 4.02133 160.879 5.6L170.222 24.352L174.639 8.928C174.767 8.33066 174.831 7.84 174.831 7.456C174.831 6.90133 174.724 6.45333 174.511 6.112C174.34 5.728 174.084 5.344 173.743 4.96C173.273 4.40533 173.039 3.936 173.039 3.552C173.039 3.296 173.06 3.104 173.103 2.976C173.273 2.37866 173.657 1.97333 174.255 1.76C174.852 1.504 175.748 1.376 176.943 1.376H183.919ZM231.827 1.376C234.173 1.376 235.347 2.336 235.347 4.256C235.347 4.85333 235.219 5.6 234.963 6.496L233.427 11.68C232.957 13.2587 232.381 14.368 231.699 15.008C231.016 15.648 230.035 15.968 228.755 15.968C227.688 15.968 226.856 15.6907 226.259 15.136C225.704 14.5813 225.171 13.7067 224.659 12.512L223.571 9.888C223.229 9.07733 222.867 8.52266 222.483 8.224C222.099 7.92533 221.501 7.776 220.691 7.776H219.219L211.091 36.384C210.963 36.9387 210.899 37.4293 210.899 37.856C210.899 38.368 210.963 38.7947 211.091 39.136C211.261 39.4773 211.496 39.84 211.795 40.224C212.179 40.8213 212.371 41.312 212.371 41.696C212.371 41.7813 212.328 41.9947 212.243 42.336C212.029 42.8907 211.603 43.296 210.963 43.552C210.365 43.808 209.491 43.936 208.339 43.936H193.299C192.403 43.936 191.699 43.7867 191.187 43.488C190.717 43.1893 190.483 42.7627 190.483 42.208C190.483 41.952 190.547 41.696 190.675 41.44C190.845 41.056 191.037 40.7787 191.251 40.608C191.507 40.3947 191.869 40.1387 192.339 39.84C192.979 39.456 193.512 39.0293 193.939 38.56C194.365 38.0907 194.728 37.3653 195.027 36.384L203.091 7.776H201.619C200.68 7.776 199.912 7.92533 199.315 8.224C198.717 8.52266 198.077 9.07733 197.395 9.888L195.283 12.512C194.301 13.664 193.341 14.5387 192.403 15.136C191.507 15.6907 190.525 15.968 189.459 15.968C188.477 15.968 187.709 15.712 187.155 15.2C186.6 14.688 186.323 13.984 186.323 13.088C186.323 12.6613 186.387 12.192 186.515 11.68L188.179 5.856C188.52 4.66133 188.904 3.76533 189.331 3.168C189.757 2.528 190.355 2.08 191.123 1.824C191.933 1.52533 193.064 1.376 194.515 1.376H231.827ZM270.917 1.376C272.496 1.376 273.712 1.71733 274.565 2.4C275.461 3.08267 275.909 4.02133 275.909 5.216C275.909 5.81333 275.824 6.38933 275.653 6.944L273.989 12.896C273.69 14.048 273.242 14.8587 272.645 15.328C272.09 15.7547 271.28 15.968 270.213 15.968C269.189 15.968 268.378 15.7547 267.781 15.328C267.226 14.8587 266.8 14.112 266.501 13.088L265.477 9.44C265.264 8.672 265.008 8.16 264.709 7.904C264.41 7.648 263.834 7.52 262.981 7.52H256.261L253.061 18.912H255.877C256.176 18.912 256.581 18.6987 257.093 18.272L259.269 16.352C259.909 15.7973 260.464 15.392 260.933 15.136C261.402 14.88 261.978 14.752 262.661 14.752C263.429 14.752 264.048 14.9653 264.517 15.392C265.029 15.776 265.285 16.288 265.285 16.928C265.285 17.0987 265.242 17.3547 265.157 17.696L262.533 26.592C262.277 27.5307 261.829 28.2347 261.189 28.704C260.592 29.1307 259.93 29.344 259.205 29.344C258.01 29.344 257.114 28.7253 256.517 27.488L255.429 25.248C255.13 24.608 254.661 24.288 254.021 24.288H251.525L247.749 37.856H253.381C254.192 37.856 254.896 37.7067 255.493 37.408C256.133 37.0667 256.816 36.4907 257.541 35.68L261.381 31.456C262.064 30.7307 262.704 30.2187 263.301 29.92C263.941 29.5787 264.709 29.408 265.605 29.408C266.544 29.408 267.312 29.6213 267.909 30.048C268.506 30.4747 268.805 31.1147 268.805 31.968C268.805 32.3093 268.741 32.7147 268.613 33.184L266.757 39.648C266.288 41.2693 265.605 42.4 264.709 43.04C263.813 43.68 262.512 44 260.805 44H230.277C229.381 44 228.698 43.8507 228.229 43.552C227.717 43.2533 227.461 42.848 227.461 42.336C227.461 42.08 227.525 41.8027 227.653 41.504C227.824 41.0347 228.101 40.672 228.485 40.416C228.869 40.16 229.104 40.0107 229.189 39.968C229.872 39.5413 230.426 39.1147 230.853 38.688C231.28 38.2187 231.642 37.472 231.941 36.448L239.813 8.864C239.984 8.30933 240.069 7.79733 240.069 7.328C240.069 6.816 239.984 6.38933 239.813 6.048C239.685 5.70667 239.472 5.344 239.173 4.96C238.789 4.40533 238.597 3.95733 238.597 3.616C238.597 3.488 238.64 3.25333 238.725 2.912C238.896 2.35733 239.28 1.97333 239.877 1.76C240.474 1.504 241.349 1.376 242.501 1.376H270.917ZM321.294 1.376C323.043 1.376 323.918 1.93067 323.918 3.04C323.918 3.33867 323.896 3.552 323.854 3.68C323.726 4.10667 323.534 4.448 323.278 4.704C323.022 4.91733 322.659 5.17333 322.19 5.472C321.55 5.856 321.016 6.28266 320.59 6.752C320.163 7.22133 319.8 7.94666 319.502 8.928L311.566 37.344C310.84 39.904 309.923 41.696 308.814 42.72C307.747 43.744 306.254 44.256 304.333 44.256C302.627 44.256 301.198 43.7653 300.046 42.784C298.936 41.76 297.891 40.2027 296.91 38.112L287.246 17.76L281.87 36.448C281.742 37.0027 281.678 37.4933 281.678 37.92C281.678 38.4747 281.763 38.944 281.934 39.328C282.147 39.6693 282.424 40.032 282.766 40.416C283.235 40.9707 283.47 41.44 283.47 41.824C283.47 42.08 283.448 42.272 283.406 42.4C283.235 42.9973 282.851 43.424 282.254 43.68C281.656 43.8933 280.76 44 279.566 44H272.59C270.84 44 269.965 43.4453 269.965 42.336C269.965 42.0373 269.987 41.824 270.029 41.696C270.157 41.2693 270.349 40.9493 270.605 40.736C270.861 40.48 271.224 40.2027 271.694 39.904C272.334 39.52 272.867 39.0933 273.294 38.624C273.72 38.1547 274.083 37.4293 274.382 36.448L282.51 7.712L281.486 5.6C281.059 4.74667 280.845 4 280.845 3.36C280.845 2.03733 281.699 1.376 283.406 1.376H292.878C294.243 1.376 295.267 1.696 295.95 2.336C296.675 2.93333 297.443 4.02133 298.254 5.6L307.597 24.352L312.014 8.928C312.142 8.33066 312.206 7.84 312.206 7.456C312.206 6.90133 312.099 6.45333 311.886 6.112C311.715 5.728 311.459 5.344 311.118 4.96C310.648 4.40533 310.414 3.936 310.414 3.552C310.414 3.296 310.435 3.104 310.478 2.976C310.648 2.37866 311.032 1.97333 311.63 1.76C312.227 1.504 313.123 1.376 314.318 1.376H321.294ZM350.531 1.376C356.931 1.376 361.752 2.61333 364.995 5.088C368.238 7.52 369.859 11.104 369.859 15.84C369.859 18.1867 369.432 20.896 368.579 23.968C367.171 28.9173 365.272 32.8427 362.883 35.744C360.494 38.6453 357.336 40.7573 353.411 42.08C349.528 43.4027 344.536 44.0427 338.435 44L321.027 43.936C320.131 43.936 319.448 43.7867 318.979 43.488C318.467 43.1893 318.211 42.784 318.211 42.272C318.211 42.016 318.275 41.7387 318.403 41.44C318.531 41.056 318.723 40.7787 318.979 40.608C319.192 40.4373 319.534 40.2027 320.003 39.904C320.686 39.52 321.219 39.0933 321.603 38.624C322.03 38.1547 322.392 37.408 322.691 36.384L330.499 8.864C330.67 8.30933 330.755 7.776 330.755 7.264C330.755 6.79467 330.67 6.41066 330.499 6.112C330.371 5.77067 330.179 5.38667 329.923 4.96C329.539 4.40533 329.347 3.95733 329.347 3.616C329.347 3.488 329.39 3.25333 329.475 2.912C329.646 2.35733 330.008 1.97333 330.563 1.76C331.16 1.504 332.056 1.376 333.251 1.376H350.531ZM352.195 22.56C353.304 18.5493 353.859 15.392 353.859 13.088C353.859 10.8267 353.39 9.26933 352.451 8.416C351.512 7.56266 350.168 7.136 348.419 7.136H347.011L338.371 38.24H339.907C341.87 38.24 343.512 37.8347 344.835 37.024C346.2 36.1707 347.459 34.6347 348.611 32.416C349.763 30.1547 350.958 26.8693 352.195 22.56Z" />
</svg>
`;
}

export default frontendSVG;