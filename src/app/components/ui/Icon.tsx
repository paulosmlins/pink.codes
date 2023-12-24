type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-top-left'
  | 'link'
  | 'chevron-left'
  | 'chevron-right'
  | 'reload'
  | 'rocket'
  | 'gear'
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'mail'
  | 'spotify';

interface IconProps extends Partial<SVGElement> {
  width?: number;
  height?: number;
  name: IconName;
  className?: string;
  ariaHidden?: string;
  ariaLabel?: string;
}

export function Icon({ className, width = 15, height = 15, name, ariaLabel }: IconProps) {
  switch (name) {
    case 'arrow-left':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'arrow-top-left':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label="Arrow Top Left Icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M11.354 11.354a.5.5 0 0 0 0-.707L4.707 4H9a.5.5 0 0 0 0-1H3.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V4.707l6.646 6.647a.5.5 0 0 0 .708 0Z"
          />
        </svg>
      );
    case 'link':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label="Link icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M8.512 3.005c.676-.46 1.531-.468 2.167-.05.144.094.298.244.71.656.412.412.562.566.657.71.417.636.408 1.49-.051 2.167-.105.155-.267.32-.694.747l-.62.619a.5.5 0 0 0 .708.707l.619-.619.043-.043c.37-.37.606-.606.771-.849.675-.994.71-2.287.06-3.278-.159-.241-.39-.472-.741-.823l-.045-.045-.044-.045c-.352-.351-.583-.582-.824-.74-.99-.65-2.284-.616-3.278.06-.243.164-.48.4-.85.77l-.042.043-.619.62a.5.5 0 1 0 .707.706l.62-.618c.426-.427.592-.59.746-.695ZM4.318 7.147a.5.5 0 0 0-.707-.707l-.619.618-.043.043c-.37.37-.606.606-.771.85-.675.993-.71 2.287-.06 3.277.159.242.39.473.741.824l.045.045.044.044c.352.351.583.583.824.741.99.65 2.284.616 3.278-.06.243-.165.48-.401.849-.771l.043-.043.619-.619a.5.5 0 1 0-.708-.707l-.618.619c-.427.427-.593.59-.747.694-.676.46-1.532.469-2.167.051-.144-.094-.298-.245-.71-.657-.412-.412-.562-.566-.657-.71-.417-.635-.408-1.49.051-2.167.105-.154.267-.32.694-.747l.619-.618Zm5.304-1.061a.5.5 0 0 0-.707-.708L5.379 8.914a.5.5 0 1 0 .707.707l3.536-3.535Z"
          />
        </svg>
      );
    case 'chevron-left':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label="Chevron Left icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023Z"
          />
        </svg>
      );
    case 'chevron-right':
      return (
        <svg
          data-name="chevron-right"
          className={className}
          height={height}
          width={width}
          aria-label="Chevron Right icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707Z"
          />
        </svg>
      );
    case 'reload':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label="Reload icon"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case 'rocket':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m6.854 3.854.8-.8c.644-.645 1.775-1.092 2.898-1.253a5.342 5.342 0 0 1 1.504-.02c.443.066.714.196.84.323.127.126.257.397.323.84.064.427.059.95-.02 1.504-.16 1.123-.608 2.254-1.253 2.898L7.5 11.793l-1.146-1.146a.5.5 0 1 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l.547-.548 1.17 1.951a.5.5 0 0 0 .783.097l2-2a.5.5 0 0 0 .141-.425l-.465-3.252.624-.623c.855-.856 1.358-2.225 1.535-3.465.09-.627.1-1.25.019-1.794-.08-.528-.256-1.05-.604-1.399-.349-.348-.871-.525-1.4-.604a6.333 6.333 0 0 0-1.793.02C9.17.987 7.8 1.49 6.946 2.345l-.623.624-3.252-.465a.5.5 0 0 0-.425.141l-2 2a.5.5 0 0 0 .097.783l1.95 1.17-.547.547a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 1 0 .708-.708L3.207 7.5l.647-.646 3-3Zm3.245 9.34-.97-1.617 2.017-2.016.324 2.262-1.37 1.37ZM3.423 5.87l2.016-2.016-2.262-.324-1.37 1.37 1.616.97Zm-1.07 4.484a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707l1-1Zm1.5 1.5a.5.5 0 1 0-.707-.707l-2 2a.5.5 0 0 0 .708.707l2-2Zm1.5 1.5a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707l1-1ZM9.5 6.748a1.249 1.249 0 1 0 0-2.498 1.249 1.249 0 0 0 0 2.498Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'gear':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={className}
          height={height}
          width={width}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-1.5 -1.5 20 20"
          className={className}
          height={height}
          width={width}
        >
          <path
            d="M13.6683 4.78509C13.6683 4.90669 13.6443 5.02711 13.5978 5.13945C13.5513 5.2518 13.483 5.35388 13.3971 5.43987C13.3111 5.52586 13.209 5.59406 13.0966 5.6406C12.9843 5.68714 12.8639 5.71109 12.7423 5.71109C12.6207 5.71109 12.5003 5.68714 12.3879 5.6406C12.2756 5.59406 12.1735 5.52586 12.0875 5.43987C12.0015 5.35388 11.9333 5.2518 11.8868 5.13945C11.8402 5.02711 11.8163 4.90669 11.8163 4.78509C11.8163 4.5395 11.9138 4.30397 12.0875 4.13031C12.2612 3.95665 12.4967 3.85909 12.7423 3.85909C12.9879 3.85909 13.2234 3.95665 13.3971 4.13031C13.5707 4.30397 13.6683 4.5395 13.6683 4.78509ZM16.6083 8.96509V8.97709L16.5553 12.3331C16.5418 13.5434 16.055 14.7004 15.1992 15.5563C14.3435 16.4123 13.1866 16.8993 11.9763 16.9131L8.60828 16.9651H8.59628L5.24028 16.9121C4.02995 16.8986 2.87299 16.4118 2.01702 15.5561C1.16104 14.7003 0.674051 13.5434 0.660276 12.3331L0.608276 8.96509V8.95309L0.661276 5.59709C0.674786 4.38676 1.16152 3.2298 2.01731 2.37383C2.8731 1.51785 4.02995 1.03086 5.24028 1.01709L8.60828 0.965088H8.62028L11.9763 1.01809C13.1866 1.0316 14.3436 1.51833 15.1995 2.37412C16.0555 3.22991 16.5425 4.38676 16.5563 5.59709L16.6083 8.96509ZM15.1183 8.96509L15.0663 5.62009C15.0569 4.79737 14.7259 4.01099 14.1442 3.4292C13.5624 2.84742 12.776 2.51644 11.9533 2.50709L8.60828 2.45509L5.26328 2.50709C4.44056 2.51644 3.65418 2.84742 3.07239 3.4292C2.49061 4.01099 2.15963 4.79737 2.15028 5.62009L2.09828 8.96509L2.15028 12.3101C2.15963 13.1328 2.49061 13.9192 3.07239 14.501C3.65418 15.0828 4.44056 15.4137 5.26328 15.4231L8.60828 15.4751L11.9533 15.4231C12.776 15.4137 13.5624 15.0828 14.1442 14.501C14.7259 13.9192 15.0569 13.1328 15.0663 12.3101L15.1183 8.96509ZM12.7163 8.96509C12.7163 10.0546 12.2835 11.0995 11.5131 11.8699C10.7427 12.6403 9.69779 13.0731 8.60828 13.0731C7.51877 13.0731 6.47388 12.6403 5.70348 11.8699C4.93308 11.0995 4.50028 10.0546 4.50028 8.96509C4.50028 7.87558 4.93308 6.83069 5.70348 6.06029C6.47388 5.28989 7.51877 4.85709 8.60828 4.85709C9.69779 4.85709 10.7427 5.28989 11.5131 6.06029C12.2835 6.83069 12.7163 7.87558 12.7163 8.96509ZM11.2263 8.96509C11.2263 8.27075 10.9505 7.60485 10.4595 7.11388C9.96851 6.62291 9.30261 6.34709 8.60828 6.34709C7.91394 6.34709 7.24804 6.62291 6.75707 7.11388C6.2661 7.60485 5.99028 8.27075 5.99028 8.96509C5.99028 9.65942 6.2661 10.3253 6.75707 10.8163C7.24804 11.3073 7.91394 11.5831 8.60828 11.5831C9.30261 11.5831 9.96851 11.3073 10.4595 10.8163C10.9505 10.3253 11.2263 9.65942 11.2263 8.96509Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      );
    case 'tiktok':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 32 32"
          className={className}
          height={height}
          width={width}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 310 310"
          className={className}
          height={height}
          width={width}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
            C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		        C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		        c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		        c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		        C204.394,157.263,202.325,160.684,199.021,162.41z"
          />
        </svg>
      );
    case 'mail':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={className}
          height={height}
          width={width}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
          />
        </svg>
      );
    case 'spotify':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 512 512"
          className={className}
          height={height}
          width={width}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M507,257.1c0,2.5-0.1,5,0,7.5c1.2,43.2-11.5,82.9-33.5,119.3c-40.5,67-99.8,108.7-177.4,119.5   c-99,13.8-179.6-21-240.1-100.7C29.8,368.3,14.8,328.8,10.4,286c-8.3-82.4,17-153.1,76.8-210.6c41.6-40,91.8-62.9,149.2-67.1   c91.8-6.7,166.4,27.1,222.7,100c26,33.7,41.4,72.3,46.7,114.6c1.4,11.3,0.2,22.8,0.2,34.3C506.3,257.1,506.7,257.1,507,257.1z    M207.8,139.3c-9.5,0.7-24.6,1.4-39.7,3c-22.4,2.2-44.5,6.1-66,12.9c-12.5,4-19,16.8-15.2,29.1c3.8,12.2,16.5,19.1,29,15.4   c30.1-8.9,60.9-12.6,92.1-13.6c30.2-1,60.2,0.9,90,5.9c37.6,6.3,74,16.7,107.3,36c12.2,7.1,26.2,3.8,33-7.8   c6.8-11.5,2.9-25.7-9.7-32.5c-11.7-6.3-23.6-12.5-35.8-17.5C335.4,146.7,275.1,139,207.8,139.3z M209.5,225   c-9.1,0.7-25.5,1.2-41.6,3.6c-16.9,2.5-33.6,6.4-50.3,10.6c-12.5,3.1-18.3,16.1-13.1,27.1c4.5,9.3,13.7,13.1,24.8,9.9   c40.5-11.8,81.9-14.4,123.6-9.9c44,4.7,85.8,16.6,124.1,39.6c9.5,5.7,21.1,2.5,26.6-6.6c5.6-9.3,2.6-21.1-7.1-26.9   c-6.7-4-13.5-7.9-20.5-11.3C325.9,236.2,272.4,225.8,209.5,225z M375.2,359.2c0.1-6.3-2.8-11.1-8.2-13.8   c-15.7-7.7-31.1-16.1-47.4-22.2c-34.4-13-70.3-17-107-16.3c-28.8,0.6-57.1,4.6-85.1,10.7c-10.1,2.2-15.9,9.9-14,18.4   c2.2,9.8,9.8,14.3,20.5,11.9c35.3-7.7,70.9-11.9,107.1-9.4c25.6,1.8,50.6,6.4,74.3,16.2c12.3,5.1,24,11.4,35.8,17.5   C362.8,378.3,375.2,371.7,375.2,359.2z"
          />
        </svg>
      );
    default:
      null;
  }
}
