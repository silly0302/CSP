import "./global.css";

export const metadata = {
  title: "김경재의 CSP",
  description: "인터넷 설계 실습",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>네비게이션바 위치!</header>
        {children}
      </body>
    </html>
  );
}
