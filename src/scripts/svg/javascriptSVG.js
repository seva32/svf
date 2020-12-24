import hyperHTML from 'hyperhtml';

function javascriptSVG(props) {
  return hyperHTML.wire(
    props,
    'svg',
  )`<svg width="305" height="52" viewBox="0 0 305 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id=${props.name} className="st1" d="M19.928 38.632C19.288 41.6187 18.2853 43.9653 16.92 45.672C15.5973 47.4213 14.04 48.744 12.248 49.64C10.456 50.536 8.536 51.112 6.488 51.368C4.39733 51.624 2.30667 51.752 0.216 51.752L0.984 47.336C1.624 47.336 2.22133 47.272 2.776 47.144C3.288 47.016 3.75733 46.7387 4.184 46.312C4.61067 45.8853 5.016 45.2453 5.4 44.392C5.74133 43.5813 6.06133 42.4507 6.36 41L12.184 13.48H25.304L19.928 38.632ZM26.84 5.096C26.84 6.07733 26.6267 6.93066 26.2 7.656C25.816 8.38133 25.2827 9 24.6 9.512C23.96 10.024 23.2133 10.408 22.36 10.664C21.5067 10.92 20.632 11.048 19.736 11.048C18.0293 11.048 16.6 10.6427 15.448 9.832C14.296 9.02133 13.72 7.74133 13.72 5.992C13.72 5.05333 13.912 4.22133 14.296 3.496C14.68 2.728 15.192 2.10933 15.832 1.64C16.5147 1.128 17.2827 0.743998 18.136 0.487999C19.032 0.231997 19.9493 0.103996 20.888 0.103996C22.552 0.103996 23.96 0.509331 25.112 1.32C26.264 2.13067 26.84 3.38933 26.84 5.096ZM30.4205 15.848C32.5965 14.7813 34.8152 14.0133 37.0765 13.544C39.3805 13.032 41.9405 12.776 44.7565 12.776C47.4872 12.776 49.7485 12.9893 51.5405 13.416C53.3325 13.8427 54.7618 14.4613 55.8285 15.272C56.8952 16.0827 57.6418 17.0427 58.0685 18.152C58.4952 19.2613 58.7085 20.52 58.7085 21.928C58.7085 22.7387 58.6445 23.6133 58.5165 24.552C58.4312 25.4907 58.3245 26.28 58.1965 26.92L55.1885 41H44.8845L43.7325 36.904H43.3485C41.9832 38.3973 40.3832 39.5493 38.5485 40.36C36.7565 41.128 34.9645 41.512 33.1725 41.512C32.1485 41.512 31.1458 41.3627 30.1645 41.064C29.1832 40.7653 28.3085 40.3173 27.5405 39.72C26.7725 39.08 26.1538 38.2907 25.6845 37.352C25.2152 36.3707 24.9805 35.1973 24.9805 33.832C24.9805 31.6133 25.5778 29.864 26.7725 28.584C28.0098 27.2613 29.6098 26.28 31.5725 25.64C33.5778 24.9573 35.8178 24.5307 38.2925 24.36C40.8098 24.1893 43.3272 24.104 45.8445 24.104C45.9298 23.6773 46.0365 23.08 46.1645 22.312C46.2925 21.5013 46.3565 20.7973 46.3565 20.2C46.3565 19.432 46.1432 18.728 45.7165 18.088C45.3325 17.4053 44.5005 17.064 43.2205 17.064C41.7272 17.064 40.6178 17.512 39.8925 18.408C39.2098 19.2613 38.7618 20.3067 38.5485 21.544H29.2045L30.4205 15.848ZM45.1405 27.112H43.9885C42.7512 27.112 41.6845 27.2827 40.7885 27.624C39.9352 27.9227 39.2312 28.328 38.6765 28.84C38.1645 29.352 37.7805 29.928 37.5245 30.568C37.2685 31.208 37.1405 31.848 37.1405 32.488C37.1405 33.512 37.3965 34.28 37.9085 34.792C38.4632 35.304 39.1032 35.56 39.8285 35.56C40.7245 35.56 41.5992 35.24 42.4525 34.6C43.3485 33.96 43.9032 33.1067 44.1165 32.04L45.1405 27.112ZM62.243 13.48H75.811L78.435 32.296L87.779 13.48H94.563L80.035 41H66.659L62.243 13.48ZM96.983 15.848C99.159 14.7813 101.378 14.0133 103.639 13.544C105.943 13.032 108.503 12.776 111.319 12.776C114.05 12.776 116.311 12.9893 118.103 13.416C119.895 13.8427 121.324 14.4613 122.391 15.272C123.458 16.0827 124.204 17.0427 124.631 18.152C125.058 19.2613 125.271 20.52 125.271 21.928C125.271 22.7387 125.207 23.6133 125.079 24.552C124.994 25.4907 124.887 26.28 124.759 26.92L121.751 41H111.447L110.295 36.904H109.911C108.546 38.3973 106.946 39.5493 105.111 40.36C103.319 41.128 101.527 41.512 99.735 41.512C98.711 41.512 97.7083 41.3627 96.727 41.064C95.7457 40.7653 94.871 40.3173 94.103 39.72C93.335 39.08 92.7163 38.2907 92.247 37.352C91.7777 36.3707 91.543 35.1973 91.543 33.832C91.543 31.6133 92.1403 29.864 93.335 28.584C94.5723 27.2613 96.1723 26.28 98.135 25.64C100.14 24.9573 102.38 24.5307 104.855 24.36C107.372 24.1893 109.89 24.104 112.407 24.104C112.492 23.6773 112.599 23.08 112.727 22.312C112.855 21.5013 112.919 20.7973 112.919 20.2C112.919 19.432 112.706 18.728 112.279 18.088C111.895 17.4053 111.063 17.064 109.783 17.064C108.29 17.064 107.18 17.512 106.455 18.408C105.772 19.2613 105.324 20.3067 105.111 21.544H95.767L96.983 15.848ZM111.703 27.112H110.551C109.314 27.112 108.247 27.2827 107.351 27.624C106.498 27.9227 105.794 28.328 105.239 28.84C104.727 29.352 104.343 29.928 104.087 30.568C103.831 31.208 103.703 31.848 103.703 32.488C103.703 33.512 103.959 34.28 104.471 34.792C105.026 35.304 105.666 35.56 106.391 35.56C107.287 35.56 108.162 35.24 109.015 34.6C109.911 33.96 110.466 33.1067 110.679 32.04L111.703 27.112ZM147.336 21.544C147.378 21.3307 147.421 21.1173 147.464 20.904C147.506 20.6907 147.528 20.456 147.528 20.2C147.528 19.432 147.378 18.728 147.08 18.088C146.824 17.4053 146.29 17.064 145.48 17.064C144.754 17.064 144.029 17.384 143.304 18.024C142.578 18.6213 142.216 19.432 142.216 20.456C142.216 21.1387 142.386 21.6933 142.728 22.12C143.112 22.504 143.602 22.824 144.2 23.08C144.797 23.336 145.458 23.5493 146.184 23.72C146.952 23.8907 147.698 24.0613 148.424 24.232C149.448 24.488 150.408 24.808 151.304 25.192C152.242 25.5333 153.074 26.0027 153.8 26.6C154.525 27.1973 155.101 27.944 155.528 28.84C155.954 29.6933 156.168 30.76 156.168 32.04C156.168 33.832 155.741 35.3467 154.888 36.584C154.077 37.7787 152.925 38.76 151.432 39.528C149.981 40.2533 148.253 40.7653 146.248 41.064C144.285 41.3627 142.173 41.512 139.912 41.512C136.456 41.512 133.597 41.256 131.336 40.744C129.074 40.232 127.495 39.7413 126.599 39.272L127.944 32.872H136.584C136.541 33.0853 136.52 33.2987 136.52 33.512C136.52 33.6827 136.52 33.8747 136.52 34.088C136.52 35.0693 136.733 35.8587 137.16 36.456C137.629 37.0107 138.418 37.288 139.528 37.288C140.765 37.288 141.64 36.9467 142.152 36.264C142.706 35.5387 142.984 34.8773 142.984 34.28C142.984 33.6827 142.749 33.1707 142.28 32.744C141.853 32.2747 141.298 31.8907 140.616 31.592C139.933 31.2507 139.165 30.9733 138.312 30.76C137.501 30.504 136.712 30.2693 135.944 30.056C135.389 29.928 134.749 29.7147 134.024 29.416C133.341 29.1173 132.68 28.6907 132.04 28.136C131.4 27.5813 130.866 26.8773 130.44 26.024C130.013 25.128 129.799 24.0187 129.799 22.696C129.799 20.8187 130.248 19.2613 131.144 18.024C132.082 16.744 133.277 15.72 134.728 14.952C136.221 14.184 137.885 13.6293 139.72 13.288C141.597 12.9467 143.474 12.776 145.352 12.776C147.698 12.776 149.917 12.9893 152.008 13.416C154.098 13.8427 155.805 14.3973 157.128 15.08L155.656 21.544H147.336ZM187.041 39.464C185.249 40.1893 183.35 40.7013 181.345 41C179.382 41.3413 177.142 41.512 174.625 41.512C172.406 41.512 170.358 41.2987 168.481 40.872C166.646 40.4027 165.046 39.6773 163.681 38.696C162.316 37.7147 161.249 36.456 160.481 34.92C159.713 33.3413 159.329 31.4427 159.329 29.224C159.329 26.92 159.713 24.7867 160.481 22.824C161.292 20.8187 162.486 19.0693 164.065 17.576C165.686 16.0827 167.734 14.9093 170.209 14.056C172.684 13.2027 175.628 12.776 179.041 12.776C181.814 12.776 184.225 13.0107 186.273 13.48C188.321 13.9067 190.006 14.9093 191.329 16.488L189.537 24.68H180.833C180.876 23.9547 180.918 23.3147 180.961 22.76C181.004 22.2053 181.025 21.5867 181.025 20.904C181.025 19.5387 180.876 18.5787 180.577 18.024C180.278 17.4267 179.788 17.128 179.105 17.128C177.91 17.128 176.865 17.7253 175.969 18.92C175.073 20.072 174.326 21.48 173.729 23.144C173.174 24.7653 172.748 26.4933 172.449 28.328C172.193 30.12 172.065 31.656 172.065 32.936C172.065 33.4053 172.086 33.896 172.129 34.408C172.172 34.8773 172.257 35.3253 172.385 35.752C172.556 36.1787 172.769 36.52 173.025 36.776C173.281 37.032 173.644 37.16 174.113 37.16C174.54 37.16 175.03 37.032 175.585 36.776C176.14 36.52 176.673 36.136 177.185 35.624C177.697 35.0693 178.188 34.3653 178.657 33.512C179.126 32.6587 179.489 31.6347 179.745 30.44H188.897L187.041 39.464ZM197.184 13.48H207.616L208.576 18.28H209.024C210.005 16.744 211.264 15.4427 212.8 14.376C214.336 13.3093 216.363 12.776 218.88 12.776C219.051 12.776 219.307 12.7973 219.648 12.84C220.032 12.84 220.437 12.904 220.864 13.032C221.333 13.1173 221.803 13.2667 222.272 13.48C222.784 13.6507 223.275 13.9067 223.744 14.248L220.928 27.432H213.952C213.867 24.7867 213.632 22.952 213.248 21.928C212.864 20.8613 212.245 20.328 211.392 20.328C210.965 20.328 210.496 20.4347 209.984 20.648C209.515 20.8187 209.024 21.224 208.512 21.864L204.416 41H191.36L197.184 13.48ZM235.29 41H222.297L228.122 13.48H241.242L235.29 41ZM242.906 5.096C242.906 6.07733 242.692 6.93066 242.266 7.656C241.882 8.38133 241.348 9 240.666 9.512C240.026 10.024 239.279 10.408 238.426 10.664C237.572 10.92 236.698 11.048 235.802 11.048C234.095 11.048 232.666 10.6427 231.514 9.832C230.362 9.02133 229.786 7.74133 229.786 5.992C229.786 5.05333 229.978 4.22133 230.362 3.496C230.746 2.728 231.258 2.10933 231.898 1.64C232.58 1.128 233.348 0.743998 234.202 0.487999C235.098 0.231997 236.015 0.103996 236.954 0.103996C238.618 0.103996 240.026 0.509331 241.178 1.32C242.33 2.13067 242.906 3.38933 242.906 5.096ZM251.8 51.752H238.743L246.808 13.48H257.24L258.392 17.576H258.776C260.312 15.9547 262.018 14.8027 263.896 14.12C265.816 13.3947 267.693 13.032 269.528 13.032C271.021 13.032 272.258 13.2667 273.24 13.736C274.264 14.1627 275.074 14.76 275.672 15.528C276.269 16.296 276.696 17.2133 276.951 18.28C277.208 19.3467 277.336 20.4773 277.336 21.672C277.336 22.2693 277.293 23.1653 277.208 24.36C277.122 25.5547 276.93 26.8987 276.632 28.392C276.333 29.8427 275.906 31.3573 275.352 32.936C274.797 34.472 274.05 35.88 273.112 37.16C272.216 38.44 271.064 39.4853 269.656 40.296C268.29 41.1067 266.648 41.512 264.728 41.512C263.661 41.512 262.616 41.384 261.592 41.128C260.61 40.872 259.714 40.5307 258.904 40.104C258.093 39.6773 257.368 39.1867 256.728 38.632C256.13 38.0347 255.682 37.4373 255.384 36.84H255L251.8 51.752ZM258.583 35.304C259.608 35.304 260.461 34.7707 261.144 33.704C261.826 32.5947 262.381 31.3147 262.808 29.864C263.234 28.3707 263.533 26.8987 263.704 25.448C263.917 23.9547 264.024 22.8453 264.024 22.12C264.024 21.2667 263.874 20.5627 263.576 20.008C263.32 19.4533 262.829 19.176 262.104 19.176C261.293 19.176 260.525 19.4747 259.8 20.072C259.074 20.6267 258.541 21.1173 258.2 21.544L255.704 33.256C256.045 33.7253 256.45 34.1947 256.92 34.664C257.389 35.0907 257.944 35.304 258.583 35.304ZM281.319 13.48C282.898 13.1387 284.284 12.7547 285.479 12.328C286.674 11.9013 287.762 11.368 288.743 10.728C289.767 10.088 290.727 9.29866 291.623 8.36C292.562 7.42133 293.564 6.26933 294.631 4.904H301.223L299.367 13.48H304.359L303.527 17.768H298.471L295.847 30.248C295.634 31.2293 295.463 32.104 295.335 32.872C295.207 33.64 295.143 34.2373 295.143 34.664C295.143 35.5173 295.442 36.0507 296.039 36.264C296.679 36.4773 297.852 36.584 299.559 36.584L298.599 41C298.3 41.0853 297.831 41.1493 297.191 41.192C296.594 41.2347 295.911 41.2773 295.143 41.32C294.418 41.4053 293.65 41.448 292.839 41.448C292.071 41.4907 291.388 41.512 290.791 41.512C289.724 41.512 288.679 41.4267 287.655 41.256C286.631 41.128 285.714 40.8507 284.903 40.424C284.092 39.9547 283.431 39.2933 282.919 38.44C282.45 37.5867 282.215 36.4347 282.215 34.984C282.215 34.472 282.236 33.832 282.279 33.064C282.364 32.296 282.514 31.4427 282.727 30.504L285.415 17.768H280.423L281.319 13.48Z" />
</svg>
`;
}

export default javascriptSVG;
