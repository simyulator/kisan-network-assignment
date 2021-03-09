import React, { useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
import Hero from '../../components/Hero/Hero';
import ReadingData from '../../components/ReadingData/ReadingData';
import './Layout.css';
import WideCard from '../../components/UI/WideCard/WideCard';
import Heading from '../../components/UI/Heading/Heading';
import Card from '../../components/UI/Card/Card';
import Footer from '../../components/Footer/Footer';
import SubMenu from '../../components/SubMenu/SubMenu';
import MessageComponent from '../../components/MessageComponent/MessageComponent';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    let prevState = showSideDrawer;
    setShowSideDrawer(!prevState);
  };

  return (
    <div className='layout'>
      <div className='toolbar-div'>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
        <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      </div>

      <main>
        <section className='hero-section'>
          <Hero />
        </section>
        <section className='body-section'>
          <div className='right-side-content'>
            <SubMenu />
            <MessageComponent />
          </div>
          <div className='data-container'>
            <section className='reading-data-section'>
              <ReadingData />
            </section>
            <section className='wide-cards-section'>
              <Heading>More in this series</Heading>
              <WideCard
                imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Grapes.jpg/140px-Grapes.jpg'
                heading='Berry'
                data='If the entire fruit is fleshy, except for maybe a thin skin, we call the fruit a berry. A berry might contain one seed or many. Grapes, avocados, and blueberries are berries. They all have a thin skin, but most of the fruit is fleshy. Strawberries, however, are actually not berries, because the seeds are on the outside: on a real berry, the seed or seeds must be inside.'
              />
              <WideCard
                imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/PearPhoto.jpg/120px-PearPhoto.jpg'
                heading='Drupe'
                data='Drupes are also called stone fruit. A drupe is a fleshy fruit with a hard stone around the seed. We usually call this stone the pit of the fruit. Peaches and olives are drupes. Actually, the almond fruit is a drupe, too, though we eat the seed that is inside the pit of the almond fruit.'
              />
            </section>
          </div>
        </section>

        <section className='cards-section'>
          <Heading>Related Articles</Heading>
          <div className='cards-div'>
            <Card
              heading='Strawberry Corn Salsa'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/exps140821_MC163887D03_10_8b.jpg?fit=696,1024'
              data='This recipe makes art in a bowl! All the colors of summer are captured in this salsa with a fresh, light flavor perfect for snacking between swims or to kick off a backyard barbecue. '
            />
            <Card
              heading='Cheese Grilled Plums'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/exps50736_CW163683D03_30_7b-2.jpg?fit=696,1024'
              data='Make a bold statement with this simple yet elegant treat. Ripe plums are grilled and then dressed with a balsamic reduction and tangy goat cheese'
            />
            <Card
              heading='Berry Ice Pops'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/exps159873_CW163682D02_23_2b-1.jpg?fit=696,1024'
              data='Nothing says summer like an ice pop. Kids and adults alike love this fruit-filled version. —Sharon Guinta, Stamford, Connecticut'
            />
            <Card
              heading='Honey Fruit Salad'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/Lime-Honey-Fruit-Salad_EXPS_BMMZ20_101081_E10_25_6b-2.jpg?fit=696,1024'
              data='Nothing is more refreshing to me than a seasonal fruit salad enhanced with this simple honey-lime dressing.'
            />
            <Card
              heading='Strawberry Lime Smoothies'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/Strawberry-Lime-Smoothies_EXPS_HCK19_43807_C06_22_2b.jpg?fit=696,1024'
              data='Peak-of-freshness strawberries make this thinner, easy drink a summer staple.'
            />
            <Card
              heading='Fresh Fruit Salsa with Cinnamon Chips'
              imgLink='https://www.tasteofhome.com/wp-content/uploads/2018/01/Fresh-Fruit-Salsa-with-Cinnamon-Chips_exps106030_HC2847498B01_09_4bC_RMS.jpg?fit=696,1024'
              data='Lime and basil really brighten the flavors in this colorful salsa. Its best when scooped up on a homemade cinnamon chip.'
            />
          </div>
        </section>
        <section className='footer-section'>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Layout;
