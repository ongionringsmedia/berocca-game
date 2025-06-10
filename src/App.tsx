import { useEffect, useState } from "react";
import { motion, useDragControls } from "motion/react";

function App() {
  const [basket, setBasket] = useState<any[]>([]);
  const controls = useDragControls();
  const fruits = ["apple", "lime", "pineapple", "riley"];

  useEffect(() => {
    const myArray = [];
    for (let i = 1; i <= 50; i++) {
      myArray.push(fruits[Math.floor(Math.random() * 4)]);
    }
    setBasket(myArray);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {basket.map((fruit, index) => (
        <motion.p
          animate={{
            y: 700,
            transition: { timeConstant: 2, delay: index * 1.5 },
          }}
          style={{ 
            position: "absolute", 
            top: "10", 
            zIndex: 0,
            left: `${Math.floor(Math.random() * 100)}vw`
          }}
        >
          {fruit}
        </motion.p>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          marginTop: "65vh",
        }}
      >
        <motion.div
          drag
          dragControls={controls}
          style={{
            width: "100px",
            height: "300px",
            backgroundColor: "red",
            zIndex: 100
          }}
        />
      </div>
    </div>
  );
}

export default App;
