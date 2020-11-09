import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="head">
          <div class="navbars">
			<div class="burger lh">
				<a class="lines" href="#">
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</a>
			</div>
			<div class="logo lh">
				<span>mos.pets</span>
				<span class="img"></span>
			</div>
			<div class="user lhs">
				<div class="icon"></div>
				<div class="dropdown">
					<a href="#">login</a>
					<a href="#">register</a>
					<a href="#">something</a>
				</div>
			</div>
		</div>
      </div>
    );
  }
}
