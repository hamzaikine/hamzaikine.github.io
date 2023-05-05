


function timeSincePost(postDate) {
  const currentDate = new Date();
  const timeDiff = Math.floor((currentDate - postDate) / 60000);

  if (timeDiff < 1) {
    return "Published Just now";
  } else if (timeDiff < 60) {
    return `Published ${timeDiff} minutes ago`;
  } else if (timeDiff < 1440) {
    const hoursAgo = Math.floor(timeDiff / 60);
    return `Publlished ${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (timeDiff < 2880) {
    return "Published Yesterday";
  } else {
    // Show the actual published date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Published on ${postDate.toLocaleDateString(undefined, options)}`;
  }
}



      const dateElements = document.querySelectorAll('.date');
       dateElements.forEach(dateElement => {
         const postDate = new Date(dateElement.textContent);
         const timeAgo = timeSincePost(postDate);
         dateElement.textContent = timeAgo;
  
       });

 