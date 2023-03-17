import React from "react";

const AboutMe = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "white",
          width: "500px",
          height: "750px",
        }}
      >
        <img
          style={{ margin: "20px" }}
          width={450}
          height={600}
          src="./profile photo.jpg"
          alt=""
        />
        <div style={{ textAlign: "center" }}>
          <h1>Zhanysheva Saikal</h1>
          <h2>Front-End Devoloper</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "25px",
          padding: "20px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          commodi doloribus doloremque ipsum magnam incidunt earum nihil
          provident eius dolore iste impedit saepe accusantium officia
          laboriosam ipsa, quisquam totam vel optio voluptatem? Molestias,
          consequuntur unde! Assumenda temporibus quasi, magni suscipit fuga
          nisi similique, fugit magnam nesciunt maiores ipsum minima at
          reprehenderit cum sequi adipisci accusamus repellat veritatis, non
          facere! Tenetur voluptatem cum accusantium nemo totam nihil tempore
          distinctio dolor. Provident eligendi placeat modi repellendus
          suscipit? Modi sint illo eum esse optio voluptatibus ipsa, repellendus
          fuga tenetur dolorum architecto adipisci totam quibusdam natus
          excepturi eligendi doloremque nobis earum! Nostrum, sunt non nisi ex
          culpa dolore quia amet odit, animi nesciunt obcaecati exercitationem
          reiciendis id similique incidunt et? Inventore exercitationem, illum
          sequi molestiae eaque labore dolorum, odio quibusdam eum saepe fuga
          quam aspernatur assumenda illo cum quas. Inventore necessitatibus
          tempore enim molestias ad consectetur nesciunt aliquid, quae, modi
          fugit veritatis placeat eveniet!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
