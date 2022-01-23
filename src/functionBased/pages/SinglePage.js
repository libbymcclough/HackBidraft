import React from 'react'
import { useParams } from "react-router-dom";

const SinglePage = () => {
  
  const WorkoutData = [
    {
      slug: "Workout-app",
      title: "Workout the App",
      description: 
      "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      slug: "Workout-author",
      title: "Workout the Author",
      description: 
      "This app was developed by Ibas Majid, a self taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
    },
  ];

  const { slug } = useParams();
  const WorkoutContent = WorkoutData.find(item => item.slug === slug);
  const {title, description} = WorkoutContent
  
  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default SinglePage
