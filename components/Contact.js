var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
         <img className={'contactImage'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGUTwOMxZhMnCyb0ZUBVpNn8LAmcVhTubdmdQ0e5JAjPMUG9a'}></img>
          <p className={'contactLabel'}> 
            Imię: {this.props.item.firstName}
          </p>
         <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}</a>
      </div>
      )}
  });