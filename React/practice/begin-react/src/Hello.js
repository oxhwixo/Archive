import React from 'react';

function Hello({color, name}) {
		return (			
			<div style={{color}}>안녕 {name}</div>
		);
}

Hello.defaultProps = {
	name: '무명씨'
}

export default Hello;