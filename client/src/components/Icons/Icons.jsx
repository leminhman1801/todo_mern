/* eslint-disable react/prop-types */
export const DetailsIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      width={width}
      height={height}
      viewBox="0 0 13 3"
      className={className}
      style={{
        width: "14px",
        height: "14px",
        display: "block",
        fill: "inherit",
        flexShrink: 0,
      }}
    >
      <g>
        <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
        <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
        <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
      </g>
    </svg>
  );
};

export const NewIcon = ({ width = "3.2rem", height = "3.2rem", className }) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}
      style={{
        width: "14px",
        height: "14px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.282)",
        flexShrink: 0,
        marginRight: "6px",
      }}
    >
      <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
    </svg>
  );
};

export const FavoritesIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={className}
      width={width}
      height={height}
      style={{
        width: "16px",
        height: "16px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.81)",
        flexShrink: 0,
      }}
    >
      <path d="M3.2627 14.7637C3.58398 15.0098 3.98047 14.9277 4.44531 14.5928L8 11.9814L11.5547 14.5928C12.0195 14.9277 12.4229 15.0098 12.7441 14.7637C13.0586 14.5244 13.127 14.1279 12.9424 13.5879L11.541 9.41113L15.1299 6.83398C15.5879 6.50586 15.7861 6.14355 15.6562 5.76074C15.5264 5.38477 15.1641 5.2002 14.5967 5.20703L10.1943 5.23438L8.85449 1.03711C8.68359 0.490234 8.40332 0.196289 8 0.196289C7.60352 0.196289 7.32324 0.490234 7.14551 1.03711L5.80566 5.23438L1.40332 5.20703C0.835938 5.2002 0.480469 5.38477 0.350586 5.76074C0.220703 6.14355 0.412109 6.50586 0.876953 6.83398L4.46582 9.41113L3.05762 13.5879C2.87305 14.1279 2.94141 14.5244 3.2627 14.7637ZM4.45898 13.1162C4.45215 13.1025 4.45215 13.0957 4.45898 13.0615L5.75781 9.39062C5.87402 9.05566 5.83301 8.84375 5.52539 8.63867L2.3125 6.4375C2.28516 6.42383 2.27148 6.41016 2.27832 6.38965C2.29199 6.37598 2.30566 6.36914 2.33984 6.36914L6.22949 6.45801C6.58496 6.47168 6.7627 6.35547 6.86523 6.01367L7.96582 2.28125C7.97266 2.24023 7.98633 2.2334 8 2.2334C8.02051 2.2334 8.02734 2.24023 8.04102 2.28125L9.13477 6.01367C9.2373 6.35547 9.42188 6.47168 9.77051 6.45801L13.6602 6.36914C13.7012 6.36914 13.7148 6.37598 13.7217 6.38965C13.7285 6.41016 13.7217 6.41699 13.6875 6.4375L10.4814 8.63867C10.167 8.85059 10.126 9.05566 10.2422 9.39062L11.541 13.0615C11.5547 13.0957 11.5547 13.1025 11.541 13.1162C11.5273 13.1367 11.5137 13.123 11.4863 13.1094L8.40332 10.7305C8.12305 10.5117 7.87695 10.5117 7.60352 10.7305L4.52051 13.1094C4.49316 13.123 4.47266 13.1367 4.45898 13.1162Z"></path>
    </svg>
  );
};

export const LinkIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={className}
      width={width}
      height={height}
      style={{
        width: "16px",
        height: "16px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.81)",
        flexShrink: 0,
      }}
    >
      <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
    </svg>
  );
};

export const DuplicateIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={className}
      width={width}
      height={height}
      style={{
        width: "16px",
        height: "16px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.81)",
        flexShrink: 0,
      }}
    >
      <path d="M2.83887 12.1523H4.00098V13.1846C4.00098 14.6406 4.75977 15.3994 6.24316 15.3994H13.1611C14.6377 15.3994 15.4033 14.6406 15.4033 13.1846V6.21191C15.4033 4.75586 14.6377 3.99707 13.1611 3.99707H11.999V2.96484C11.999 1.50879 11.2334 0.75 9.75684 0.75H2.83887C1.3623 0.75 0.59668 1.50195 0.59668 2.96484V9.93066C0.59668 11.3936 1.3623 12.1523 2.83887 12.1523ZM2.9209 10.8125C2.28516 10.8125 1.93652 10.4844 1.93652 9.82129V3.08105C1.93652 2.41797 2.28516 2.08301 2.9209 2.08301H9.68164C10.3105 2.08301 10.666 2.41797 10.666 3.08105V3.99707H6.24316C4.75977 3.99707 4.00098 4.75586 4.00098 6.21191V10.8125H2.9209ZM6.31836 14.0596C5.68262 14.0596 5.34082 13.7314 5.34082 13.0684V6.32812C5.34082 5.66504 5.68262 5.33691 6.31836 5.33691H13.0791C13.708 5.33691 14.0635 5.66504 14.0635 6.32812V13.0684C14.0635 13.7314 13.708 14.0596 13.0791 14.0596H6.31836Z"></path>
    </svg>
  );
};

export const MoveToIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={className}
      width={width}
      height={height}
      style={{
        width: "16px",
        height: "16px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.81)",
        flexShrink: 0,
      }}
    >
      <path d="M2.34668 13.5469C2.78418 13.5469 3.07812 13.2393 3.07812 12.8018C3.07812 12.542 3.05762 12.2754 3.05762 11.8994C3.05762 9.60254 3.86426 8.67285 6.14062 8.67285H10.5771L12.2109 8.57031L10.1738 10.4297L8.64941 11.9678C8.5127 12.1045 8.43066 12.2891 8.43066 12.501C8.43066 12.9111 8.73828 13.2188 9.16895 13.2188C9.35352 13.2188 9.53809 13.1436 9.70215 12.9863L14.207 8.48145C14.3711 8.33105 14.4531 8.12598 14.4531 7.9209C14.4531 7.71582 14.3711 7.51758 14.207 7.36035L9.71582 2.86914C9.53809 2.70508 9.35352 2.62305 9.16895 2.62305C8.73828 2.62305 8.43066 2.93066 8.43066 3.34082C8.43066 3.55273 8.5127 3.7373 8.64941 3.87402L10.1738 5.41895L12.2041 7.27148L10.5771 7.17578H6.04492C2.87988 7.17578 1.54688 8.63184 1.54688 11.8516C1.54688 12.2549 1.56055 12.6035 1.61523 12.877C1.67676 13.2051 1.88184 13.5469 2.34668 13.5469Z"></path>
    </svg>
  );
};

export const TrashIcon = ({
  width = "3.2rem",
  height = "3.2rem",
  className,
}) => {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={className}
      width={width}
      height={height}
      style={{
        width: "16px",
        height: "16px",
        display: "block",
        fill: "rgba(255, 255, 255, 0.81)",
        flexShrink: 0,
      }}
    >
      <path d="M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z"></path>
    </svg>
  );
};