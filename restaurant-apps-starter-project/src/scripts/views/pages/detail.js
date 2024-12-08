import RestaurantSource from '../../data/restaurant-source';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import  { menuDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content_detail">
    </div>
    <div class="likeButtonContainer">
    </div>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantSource.detailMenu(url.id);
    const displayDetailMenu = document.querySelector('.content_detail');
    displayDetailMenu.innerHTML = menuDetailTemplate(restaurantDetail);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurantDetail: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
      },
    });
    console.log(restaurantDetail);
  },
};

export default Detail;