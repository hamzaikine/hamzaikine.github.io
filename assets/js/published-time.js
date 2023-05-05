function timeSincePost(timeElapsed, postDate) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const daysElapsed = Math.floor(timeElapsed / oneDay);
  
  if (daysElapsed <= 1) {
    // Show the time elapsed
    const timeUnits = [
      { label: 'day',    value: 24 * 60 * 60 * 1000 },
      { label: 'hour',   value:      60 * 60 * 1000 },
      { label: 'minute', value:           60 * 1000 },
      { label: 'second', value:                1000 },
    ];

    for (const unit of timeUnits) {
      const elapsed = Math.floor(timeElapsed / unit.value);
      if (elapsed >= 1) {
        return `${elapsed} ${unit.label}${elapsed > 1 ? 's' : ''} ago`;
      }
    }
    return 'Just now';
  } else if (daysElapsed === 2) {
         return 'Yesterday'
  }else {
    // Show the actual published date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return `Published on ${postDate.toLocaleDateString(undefined, options)}`;
  }
}

      const dateElements = document.querySelectorAll('.date');
       dateElements.forEach(dateElement => {
         const postDate = new Date(dateElement.textContent);
         const timeElapsed = Date.now() - postDate.getTime();
         dateElement.textContent = timeSincePost(timeElapsed);
       });

 