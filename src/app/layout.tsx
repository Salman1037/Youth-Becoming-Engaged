import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/font-awesome-all.css";
import "../assets/css/flaticon.css";
import "../assets/css/owl.css";
import "../assets/css/bootstrap.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/animate.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/nice-select.css";
import "../assets/css/elpath.css";
import "../assets/css/color/theme-color.css";
import "../assets/css/switcher-style.css";
import "../assets/css/rtl.css";
import "../assets/css/style.css";
import "../assets/css/module-css/banner.css";
import "../assets/css/module-css/contact-info.css";
import "../assets/css/module-css/about.css";
import "../assets/css/module-css/service.css";
import "../assets/css/module-css/chooseus.css";
import "../assets/css/module-css/appointment.css";
import "../assets/css/module-css/working.css";
import "../assets/css/module-css/team.css";
import "../assets/css/module-css/portfolio.css";
import "../assets/css/module-css/news.css";
import "../assets/css/module-css/contact.css";
import "../assets/css/responsive.css";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youth Becoming Engaged",
  description: "A Next.js application with Bootstrap 5 designed for youth engagement",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Medicinsk - HTML 5 Template Preview</title>
        <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="boxed_wrapper ltr">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

