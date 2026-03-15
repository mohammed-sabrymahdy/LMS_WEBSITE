import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.emoji}>🍕</div>
      <h2>استنى بس.. السيستم بيريح شوية ☕</h2>
      <p>Loading{dots}</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  emoji: {
    fontSize: "60px",
    animation: "bounce 1s infinite",
  },
};

export default Loading;
