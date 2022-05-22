import React from "react";
import { MdDownload } from "react-icons/md";

const ProjectTemplateBox = ({ fileName, fileSize, updatedAt, fileType }) => {
  const pdf = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#e53935"
        d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
      />
      <path
        fill="#fff"
        d="M34.841,26.799c-1.692-1.757-6.314-1.041-7.42-0.911c-1.627-1.562-2.734-3.45-3.124-4.101 c0.586-1.757,0.976-3.515,1.041-5.402c0-1.627-0.651-3.385-2.473-3.385c-0.651,0-1.237,0.391-1.562,0.911 c-0.781,1.367-0.456,4.101,0.781,6.899c-0.716,2.018-1.367,3.97-3.189,7.42c-1.888,0.781-5.858,2.604-6.183,4.556 c-0.13,0.586,0.065,1.172,0.521,1.627C13.688,34.805,14.273,35,14.859,35c2.408,0,4.751-3.32,6.379-6.118 c1.367-0.456,3.515-1.107,5.663-1.497c2.538,2.213,4.751,2.538,5.923,2.538c1.562,0,2.148-0.651,2.343-1.237 C35.492,28.036,35.297,27.32,34.841,26.799z M33.214,27.905c-0.065,0.456-0.651,0.911-1.692,0.651 c-1.237-0.325-2.343-0.911-3.32-1.692c0.846-0.13,2.734-0.325,4.101-0.065C32.824,26.929,33.344,27.254,33.214,27.905z M22.344,14.497c0.13-0.195,0.325-0.325,0.521-0.325c0.586,0,0.716,0.716,0.716,1.302c-0.065,1.367-0.325,2.734-0.781,4.036 C21.824,16.905,22.019,15.083,22.344,14.497z M22.214,27.124c0.521-1.041,1.237-2.864,1.497-3.645 c0.586,0.976,1.562,2.148,2.083,2.669C25.794,26.213,23.776,26.604,22.214,27.124z M18.374,29.728 c-1.497,2.473-3.059,4.036-3.905,4.036c-0.13,0-0.26-0.065-0.391-0.13c-0.195-0.13-0.26-0.325-0.195-0.586 C14.078,32.136,15.77,30.899,18.374,29.728z"
      />
    </svg>
  );

  const docx = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <linearGradient
        id="Q7XamDf1hnh~bz~vAO7C6a"
        x1="28"
        x2="28"
        y1="14.966"
        y2="6.45"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#42a3f2" />
        <stop offset="1" stopColor="#42a4eb" />
      </linearGradient>
      <path
        fill="url(#Q7XamDf1hnh~bz~vAO7C6a)"
        d="M42,6H14c-1.105,0-2,0.895-2,2v7.003h32V8C44,6.895,43.105,6,42,6z"
      />
      <linearGradient
        id="Q7XamDf1hnh~bz~vAO7C6b"
        x1="28"
        x2="28"
        y1="42"
        y2="33.054"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#11408a" />
        <stop offset="1" stopColor="#103f8f" />
      </linearGradient>
      <path
        fill="url(#Q7XamDf1hnh~bz~vAO7C6b)"
        d="M12,33.054V40c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2v-6.946H12z"
      />
      <linearGradient
        id="Q7XamDf1hnh~bz~vAO7C6c"
        x1="28"
        x2="28"
        y1="-15.46"
        y2="-15.521"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3079d6" />
        <stop offset="1" stopColor="#297cd2" />
      </linearGradient>
      <path
        fill="url(#Q7XamDf1hnh~bz~vAO7C6c)"
        d="M12,15.003h32v9.002H12V15.003z"
      />
      <linearGradient
        id="Q7XamDf1hnh~bz~vAO7C6d"
        x1="12"
        x2="44"
        y1="28.53"
        y2="28.53"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1d59b3" />
        <stop offset="1" stopColor="#195bbc" />
      </linearGradient>
      <path
        fill="url(#Q7XamDf1hnh~bz~vAO7C6d)"
        d="M12,24.005h32v9.05H12V24.005z"
      />
      <path
        d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
        opacity=".05"
      />
      <path
        d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
        opacity=".07"
      />
      <path
        d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
        opacity=".09"
      />
      <linearGradient
        id="Q7XamDf1hnh~bz~vAO7C6e"
        x1="4.744"
        x2="23.494"
        y1="14.744"
        y2="33.493"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#256ac2" />
        <stop offset="1" stopColor="#1247ad" />
      </linearGradient>
      <path
        fill="url(#Q7XamDf1hnh~bz~vAO7C6e)"
        d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
      />
      <path
        fill="#fff"
        d="M18.403,19l-1.546,7.264L15.144,19h-2.187l-1.767,7.489L9.597,19H7.641l2.344,10h2.352l1.713-7.689	L15.764,29h2.251l2.344-10H18.403z"
      />
    </svg>
  );

  const video = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <radialGradient
        id="zzRUl~RK3zhi1YlAgR3VLa"
        cx="43.956"
        cy="41.272"
        r="48.447"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#9e6fd9" />
        <stop offset=".173" stopColor="#aa73c7" />
        <stop offset=".522" stopColor="#ca7f97" />
        <stop offset="1" stopColor="#fc914d" />
      </radialGradient>
      <path
        fill="url(#zzRUl~RK3zhi1YlAgR3VLa)"
        d="M42,7H6C4.895,7,4,7.895,4,9v30c0,1.105,0.895,2,2,2h36c1.105,0,2-0.895,2-2V9	C44,7.895,43.105,7,42,7z"
      />
      <radialGradient
        id="zzRUl~RK3zhi1YlAgR3VLb"
        cx="8.431"
        cy="17.365"
        r="36.063"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4b4b4b" />
        <stop offset=".531" stopColor="#393939" />
        <stop offset="1" stopColor="#252525" />
      </radialGradient>
      <rect
        width="34"
        height="25"
        x="7"
        y="13"
        fill="url(#zzRUl~RK3zhi1YlAgR3VLb)"
      />
      <polygon fill="#af4e63" points="39,7 35,7 37,10 35,13 39,13 41,10" />
      <polygon fill="#af4e63" points="30,7 26,7 28,10 26,13 30,13 32,10" />
      <polygon fill="#af4e63" points="21,7 17,7 19,10 17,13 21,13 23,10" />
      <polygon fill="#af4e63" points="12,7 8,7 10,10 8,13 12,13 14,10" />
      <path
        d="M32.352,23.94l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,16.549,18,17.183,18,17.876	v15.248c0,0.693,0.38,1.327,0.991,1.654C19.269,34.926,19.572,35,19.875,35c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,24.872,32.874,24.289,32.352,23.94z"
        opacity=".05"
      />
      <path
        d="M20.681,16.737l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V18.243C18.5,16.238,20.084,16.338,20.681,16.737z"
        opacity=".07"
      />
      <path
        fill="#fff"
        d="M19,33.068V17.932c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,34.254,19,33.811,19,33.068z"
      />
    </svg>
  );

  const txt = (
    <img
      src="https://img.icons8.com/fluency/96/000000/notepad.png"
      alt={"text icon"}
      className={"w-14 h-14"}
    />
  );

  const pptx = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <path
        fill="#dc4c2c"
        d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"
      />
      <path fill="#f7a278" d="M26,6v18h18C44,14.059,35.941,6,26,6z" />
      <path fill="#c06346" d="M26,6C16.059,6,8,14.059,8,24h18V6z" />
      <path
        fill="#9b341f"
        d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
      />
      <path
        fill="#fff"
        d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"
      />
    </svg>
  );

  const xlsx = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
    >
      <rect width="16" height="9" x="28" y="15" fill="#21a366" />
      <path
        fill="#185c37"
        d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"
      />
      <rect width="16" height="9" x="28" y="24" fill="#107c42" />
      <rect width="16" height="9" x="12" y="15" fill="#3fa071" />
      <path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z" />
      <path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z" />
      <path
        d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
        opacity=".05"
      />
      <path
        d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z"
        opacity=".07"
      />
      <path
        d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
        opacity=".09"
      />
      <linearGradient
        id="flEJnwg7q~uKUdkX0KCyBa"
        x1="4.725"
        x2="23.055"
        y1="14.725"
        y2="33.055"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#18884f" />
        <stop offset="1" stopColor="#0b6731" />
      </linearGradient>
      <path
        fill="url(#flEJnwg7q~uKUdkX0KCyBa)"
        d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"
      />
      <path
        fill="#fff"
        d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"
      />
    </svg>
  );

  return (
    <div
      className={
        "grid grid-cols-6 items-center pl-3 gap-4 bg-gray-300 shadow rounded-lg"
      }
    >
      {fileType === "pdf" && <>{pdf}</>}
      {(fileType === "docx" || fileType === "doc") && <>{docx}</>}
      {fileType === "mp4" && <>{video}</>}
      {fileType === "txt" && <>{txt}</>}
      {(fileType === "pptx" || fileType === "ppt") && <>{pptx}</>}
      {(fileType === "xlsx" || fileType === "xls") && <>{xlsx}</>}
      <div className={"col-span-5 px-2 py-2.5 flex flex-col gap-3 bg-gray-100"}>
        <div className={"grid grid-cols-8 items-center"}>
          <div
            className={"col-start-1 col-end-8 capitalize text-lg font-semibold"}
          >
            {fileName}
          </div>
          <MdDownload className={"col-start-8 col-end-9 w-5 h-5"} />
        </div>
        <div className={"grid grid-cols-8 items-center"}>
          <div className={"col-start-1 col-end-8 text-sm text-gray-500"}>
            {updatedAt}
          </div>
          <div
            className={
              "col-start-8 col-end-9 justify-start text-xs text-gray-500"
            }
          >
            {fileSize}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplateBox;
