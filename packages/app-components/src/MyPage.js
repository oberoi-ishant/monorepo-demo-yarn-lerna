import React from 'react';

class MyPage extends React.Component {
  render () {
    return (
      <div>
        <div class="mypage-heading__box">
          <h3 class="mypage-heading__text heading-secondary">
            <span class="mypage-heading__span">My Page Component</span>
          </h3>
        </div>
        <h3 class="u-margin-bottom-medium">Parent: { this.props.parent }</h3>
        <div>Praesent molestie mi eu ligula rutrum congue. Nunc efficitur est vel pharetra gravida. Pellentesque sit amet tortor laoreet enim ultrices hendrerit. Mauris malesuada laoreet erat at commodo. Donec non semper libero. Fusce dignissim nisl vehicula, vestibulum urna et, commodo urna. Quisque rutrum mauris aliquet sagittis molestie. In diam nunc, tincidunt et nibh et, hendrerit ornare nunc. Nunc nec ante nec dui pulvinar lobortis sed quis massa. Quisque at scelerisque ipsum, at ultrices purus.</div>
      </div>
    );
  }
}

export default MyPage;
