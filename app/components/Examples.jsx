var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-centered">Examples</h1>
    <p>Here are a hew Example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=London'>London, England</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio, Brazil</Link>
      </li>
      <li>
        <Link to='/?location=Beijing'>Beijing, China</Link>
      </li>
    </ol>
    </div>
  )
};

module.exports = Examples;
