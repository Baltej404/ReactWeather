var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Welcome To About</h1>
        <p>This is the about us page and will give you the temperture of a given location</p>
        <p>Here are some of the tools to use:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - this was the
              javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open weather map</a> - I used
              the openweathermap api for the temperture.
          </li>
        </ul>
    </div>

  )
};

module.exports = About;
