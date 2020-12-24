import hyperHTML from 'hyperhtml';

function codeSVG(props) {
  return hyperHTML.wire(
    props,
    'svg',
  )`<svg width="155" height="46" viewBox="0 0 155 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id=${props.name} className="st1" d="M8.344 22.688C8.344 20.64 8.68533 18.72 9.368 16.928C10.0933 15.136 11.096 13.5787 12.376 12.256C13.656 10.9333 15.2133 9.888 17.048 9.12C18.8827 8.352 20.9307 7.968 23.192 7.968C24.3013 7.968 25.2827 8.05333 26.136 8.224C27.032 8.352 27.7787 8.52266 28.376 8.736C29.1013 8.94933 29.72 9.20533 30.232 9.504L31.128 7.968C30.4453 7.66933 29.72 7.392 28.952 7.136C28.2267 6.92266 27.3947 6.73066 26.456 6.56C25.5173 6.38933 24.4293 6.304 23.192 6.304C21.016 6.304 18.9253 6.688 16.92 7.456C14.9573 8.224 13.208 9.33333 11.672 10.784C10.1787 12.192 8.96267 13.92 8.024 15.968C7.128 17.9733 6.68 20.2133 6.68 22.688C6.68 25.2053 7.10667 27.4667 7.96 29.472C8.856 31.4773 10.072 33.2053 11.608 34.656C13.144 36.064 14.936 37.152 16.984 37.92C19.032 38.688 21.208 39.072 23.512 39.072C24.792 39.072 25.944 38.9653 26.968 38.752C27.992 38.5387 28.8667 38.304 29.592 38.048C30.4027 37.7493 31.128 37.408 31.768 37.024L30.872 35.488C30.3173 35.872 29.6773 36.192 28.952 36.448C28.312 36.704 27.544 36.9387 26.648 37.152C25.752 37.3227 24.7067 37.408 23.512 37.408C21.1653 37.408 19.0533 37.024 17.176 36.256C15.2987 35.488 13.6987 34.4427 12.376 33.12C11.096 31.7973 10.0933 30.24 9.368 28.448C8.68533 26.656 8.344 24.736 8.344 22.688ZM0.28 22.688C0.28 19.2747 0.877333 16.2027 2.072 13.472C3.26667 10.6987 4.888 8.33066 6.936 6.368C8.984 4.40533 11.3733 2.912 14.104 1.888C16.8347 0.821331 19.736 0.287998 22.808 0.287998C25.24 0.287998 27.3947 0.522664 29.272 0.991997C31.192 1.46133 32.8347 1.99467 34.2 2.592C35.7787 3.27466 37.144 4.02133 38.296 4.832L31.576 16.672C30.8933 16.16 30.1467 15.6693 29.336 15.2C28.6107 14.8587 27.736 14.5387 26.712 14.24C25.7307 13.8987 24.6 13.728 23.32 13.728C21.9973 13.728 20.7813 13.9627 19.672 14.432C18.5627 14.9013 17.5813 15.5413 16.728 16.352C15.9173 17.1627 15.2773 18.1227 14.808 19.232C14.3387 20.2987 14.104 21.4507 14.104 22.688C14.104 23.9253 14.3387 25.0987 14.808 26.208C15.32 27.2747 16.0027 28.2133 16.856 29.024C17.7093 29.8347 18.712 30.4747 19.864 30.944C21.016 31.4133 22.2747 31.648 23.64 31.648C25.0053 31.648 26.2213 31.4773 27.288 31.136C28.3547 30.7947 29.2507 30.4107 29.976 29.984C30.8293 29.5147 31.576 28.96 32.216 28.32L38.936 40.16C37.784 41.0987 36.4187 41.9307 34.84 42.656C33.4747 43.2533 31.832 43.808 29.912 44.32C27.992 44.832 25.7947 45.088 23.32 45.088C19.992 45.088 16.92 44.5547 14.104 43.488C11.288 42.3787 8.856 40.8427 6.808 38.88C4.76 36.9173 3.16 34.5707 2.008 31.84C0.856 29.0667 0.28 26.016 0.28 22.688ZM39.5925 22.688C39.5925 19.616 40.1685 16.7147 41.3205 13.984C42.5152 11.2533 44.1152 8.88533 46.1205 6.88C48.1685 4.832 50.5578 3.232 53.2885 2.08C56.0192 0.885331 58.9205 0.287998 61.9925 0.287998C65.0645 0.287998 67.9658 0.885331 70.6965 2.08C73.4272 3.232 75.7952 4.832 77.8005 6.88C79.8485 8.88533 81.4485 11.2533 82.6005 13.984C83.7952 16.7147 84.3925 19.616 84.3925 22.688C84.3925 25.76 83.7952 28.6613 82.6005 31.392C81.4485 34.1227 79.8485 36.512 77.8005 38.56C75.7952 40.5653 73.4272 42.1653 70.6965 43.36C67.9658 44.512 65.0645 45.088 61.9925 45.088C58.9205 45.088 56.0192 44.512 53.2885 43.36C50.5578 42.1653 48.1685 40.5653 46.1205 38.56C44.1152 36.512 42.5152 34.1227 41.3205 31.392C40.1685 28.6613 39.5925 25.76 39.5925 22.688ZM45.6085 22.688C45.6085 24.9493 46.0352 27.0827 46.8885 29.088C47.7418 31.0507 48.9152 32.7787 50.4085 34.272C51.9018 35.7653 53.6298 36.9387 55.5925 37.792C57.5978 38.6453 59.7312 39.072 61.9925 39.072C64.2538 39.072 66.3658 38.6453 68.3285 37.792C70.3338 36.9387 72.0832 35.7653 73.5765 34.272C75.0698 32.7787 76.2432 31.0507 77.0965 29.088C77.9498 27.0827 78.3765 24.9493 78.3765 22.688C78.3765 20.4267 77.9498 18.3147 77.0965 16.352C76.2432 14.3467 75.0698 12.5973 73.5765 11.104C72.0832 9.61067 70.3338 8.43733 68.3285 7.584C66.3658 6.73066 64.2538 6.304 61.9925 6.304C59.7312 6.304 57.5978 6.73066 55.5925 7.584C53.6298 8.43733 51.9018 9.61067 50.4085 11.104C48.9152 12.5973 47.7418 14.3467 46.8885 16.352C46.0352 18.3147 45.6085 20.4267 45.6085 22.688ZM53.0325 22.688C53.0325 23.9253 53.2672 25.0987 53.7365 26.208C54.2058 27.2747 54.8458 28.2133 55.6565 29.024C56.4672 29.8347 57.4058 30.4747 58.4725 30.944C59.5818 31.4133 60.7552 31.648 61.9925 31.648C63.2298 31.648 64.3818 31.4133 65.4485 30.944C66.5578 30.4747 67.5178 29.8347 68.3285 29.024C69.1392 28.2133 69.7792 27.2747 70.2485 26.208C70.7178 25.0987 70.9525 23.9253 70.9525 22.688C70.9525 21.4507 70.7178 20.2987 70.2485 19.232C69.7792 18.1227 69.1392 17.1627 68.3285 16.352C67.5178 15.5413 66.5578 14.9013 65.4485 14.432C64.3818 13.9627 63.2298 13.728 61.9925 13.728C60.7552 13.728 59.5818 13.9627 58.4725 14.432C57.4058 14.9013 56.4672 15.5413 55.6565 16.352C54.8458 17.1627 54.2058 18.1227 53.7365 19.232C53.2672 20.2987 53.0325 21.4507 53.0325 22.688ZM61.9925 37.408C59.9445 37.408 58.0245 37.024 56.2325 36.256C54.4832 35.488 52.9258 34.4427 51.5605 33.12C50.2378 31.7547 49.1925 30.1973 48.4245 28.448C47.6565 26.656 47.2725 24.736 47.2725 22.688C47.2725 20.64 47.6565 18.7413 48.4245 16.992C49.1925 15.2 50.2378 13.6427 51.5605 12.32C52.9258 10.9547 54.4832 9.888 56.2325 9.12C58.0245 8.352 59.9445 7.968 61.9925 7.968C64.0405 7.968 65.9392 8.352 67.6885 9.12C69.4805 9.888 71.0378 10.9547 72.3605 12.32C73.7258 13.6427 74.7925 15.2 75.5605 16.992C76.3285 18.7413 76.7125 20.64 76.7125 22.688C76.7125 24.736 76.3285 26.656 75.5605 28.448C74.7925 30.1973 73.7258 31.7547 72.3605 33.12C71.0378 34.4427 69.4805 35.488 67.6885 36.256C65.9392 37.024 64.0405 37.408 61.9925 37.408ZM87.9275 44V1.312H99.7675C103.778 1.312 107.341 1.76 110.456 2.656C113.613 3.552 116.258 4.896 118.392 6.688C120.568 8.48 122.21 10.72 123.319 13.408C124.472 16.0533 125.048 19.1253 125.048 22.624C125.048 26.1227 124.472 29.216 123.319 31.904C122.21 34.5493 120.568 36.768 118.392 38.56C116.258 40.352 113.613 41.7173 110.456 42.656C107.341 43.552 103.778 44 99.7675 44H87.9275ZM95.9915 37.344V7.968H99.7675C105.186 7.968 109.389 9.20533 112.376 11.68C115.405 14.112 116.92 17.76 116.92 22.624C116.92 27.488 115.405 31.1573 112.376 33.632C109.389 36.1067 105.186 37.344 99.7675 37.344H95.9915ZM94.3275 38.88H99.7675C105.997 38.88 110.69 37.472 113.848 34.656C117.048 31.7973 118.648 27.7867 118.648 22.624C118.648 17.4613 117.048 13.472 113.848 10.656C110.69 7.84 105.997 6.432 99.7675 6.432H94.3275V38.88ZM101.56 31.84C104.76 31.84 107.234 31.0933 108.984 29.6C110.733 28.064 111.608 25.7387 111.608 22.624C111.608 19.5093 110.733 17.2053 108.984 15.712C107.234 14.2187 104.76 13.472 101.56 13.472V31.84ZM128.553 1.312H153.705V12.512H142.185V17.248H153.513V27.872H142.185V32.8H154.153V44H128.553V1.312ZM149.417 38.88V37.344H136.617V23.328H148.777V21.792H136.617V7.968H149.417V6.432H134.953V38.88H149.417Z" />
</svg>
`;
}

export default codeSVG;
