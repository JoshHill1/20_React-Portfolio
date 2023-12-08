import { Link } from "react-router-dom"
// import me from "../assets/image_67177729.JPG"

export default function Home() {
  return (
    <div className="page-padding">
      <h1>About Me</h1>
      <img src="assets/image_67177729.JPG" alt="Picture of me" />
      <p>
        Hello, My name is Joshua Hill and I currently live in Irvine, CA. I grew up with the Wii as my first console to play video games on and got into playing them a lot! Near the end of high school, I wanted to go into college learning game development and was already into creating 3D assets with Blender. It wasn't till my fourth semester, when I joined the intro class to web development. I thouhgt it was interesting with what you could do; and saw so many videos online with what you could do with CSS and then also incorperating JavaScript into your website. That has led me down the path of going for the position of a front end or full-stack web developer.
        My other interests are art, graphic design, studying more on UI and UX, biking, and learning more about AI and what you can do with it.
      </p>
    </div>
  );
}
