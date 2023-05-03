import React, { Component } from 'react'

export class aboutPage extends Component {
  render() {
    return (
      <div className='About-page'>
        <div className='abwrapper'>
          <img src="/img/aboutimg.jpg " alt="aboutimg"/>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat sem quis felis mollis sagittis. Morbi pellentesque eu sapien quis varius. Nullam vulputate sem nulla, at eleifend lectus lacinia ut. Aenean faucibus mauris in mauris fermentum, vel faucibus tortor elementum. Praesent luctus nibh in odio sagittis, at ullamcorper augue ornare. Curabitur et augue turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ullamcorper euismod varius. Ut vitae neque sed lectus interdum pellentesque vel non massa. Ut pretium imperdiet metus ac hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sagittis pellentesque dui et porta. In varius hendrerit arcu in ultrices. In hac habitasse platea dictumst. Phasellus at nibh pharetra, dapibus massa at, volutpat ex.</h3> 
        </div>
        <div className='abwrapper'>
          <h3>Phasellus dictum ullamcorper lorem, sit amet congue ipsum tincidunt in. Phasellus placerat justo sed urna commodo euismod. Suspendisse dui orci, hendrerit ut ante a, lobortis pulvinar nibh. Integer eu mauris eget sem faucibus convallis. Cras a odio sit amet justo faucibus pretium ut eget ante. Donec purus diam, congue non malesuada vitae, sodales vitae risus. Nam dictum, nibh et imperdiet facilisis, orci felis laoreet erat, sit amet venenatis turpis magna vitae eros. Integer vehicula euismod consectetur. Nullam mattis commodo orci, id tristique odio tincidunt sit amet. Fusce sagittis sed purus ac auctor. Sed at molestie velit, vel laoreet nulla. Integer scelerisque augue mauris, vitae porta elit viverra in. Praesent ex leo, dapibus nec dictum at, luctus quis neque.</h3> 
          <img src="/img/aboutimg2.jpg " alt="aboutimg"/>
        </div>
        <a href={'/'}>Go to store</a>
      </div>
    )
  }
}

export default aboutPage