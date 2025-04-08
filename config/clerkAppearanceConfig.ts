import type { Appearance } from "@clerk/types";

const clerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#611BBD",
    colorBackground: "#ffffff",
    colorText: "#000000",
    fontFamily: "'Poppins', sans-serif",
  },

  layout: {
    logoImageUrl: "/logoipsum-secondary.svg",
    showOptionalFields: true,
    socialButtonsPlacement: "bottom", // 'top' | 'bottom'
    socialButtonsVariant: "iconButton", // 'iconButton' | 'blockButton'
  },

  elements: {
    rootBox: {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
    },
    headerSubtitle: {
      fontSize: "12px",
      color: "#666",
    },
    formFieldLabel: {
      fontWeight: "500",
    },
    formFieldInput: {
      padding: "10px",
    },
    formButtonPrimary: {
      fontSize: "14px",
      textTransform: "none",
      backgroundColor: "#611BBD",
      color: "white",
      "&:hover, &:focus, &:active": {
        backgroundColor: "#49247A",
      },
    },
    footerActionText: {
      fontSize: "13px",
    },
    footerActionLink: {
      color: "#611BBD",
      fontWeight: "600",
    },
    identityPreview: {
      backgroundColor: "#f5f5f5",
    },
    formFieldWarningText: {
      color: "#D97706",
    },
    formFieldSuccessText: {
      color: "#059669",
    },
    formFieldErrorText: {
      color: "#DC2626",
    },
    dividerText: {
      color: "#888",
      fontSize: "13px",
    },
  },
};

export default clerkAppearance;
