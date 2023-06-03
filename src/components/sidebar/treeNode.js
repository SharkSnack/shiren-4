import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'beginner-guide': // guides
        items[0] = { items:[], label: 'faq', title: 'FAQ', url: '/guides/faq'};
        items[1] = { items:[], label: 'beginner-guide', title: 'Beginner Guide', url: '/guides/beginner-guide'};
        items[2] = { items:[], label: 'postgame-guide', title: 'Postgame Guide', url: '/guides/postgame-guide'};
        items[3] = { items:[], label: 'tips-and-tricks', title: 'Tips and Tricks', url: '/guides/tips-and-tricks'};
        items[4] = { items:[], label: 'identifying-items', title: 'Identifying Items', url: '/guides/identifying-items'};
        items[5] = { items:[], label: 'stealing', title: 'Stealing', url: '/guides/stealing'};
        items[6] = { items:[], label: 'book-completion', title: 'Book Completion', url: '/guides/book-completion'};
        items[7] = { items:[], label: 'rescue-passwords', title: 'Rescue Passwords', url: '/guides/rescue-passwords'};
        break;
      case 'bracelets': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'bracelets', title: 'Bracelets', url: '/items/bracelets'};
        items[4] = { items:[], label: 'grass', title: 'Grass', url: '/items/grass'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'pots', title: 'Pots', url: '/items/pots'};
        items[8] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        items[9] = { items:[], label: 'talismans', title: 'Talismans', url: '/items/talismans'};
        items[10] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        items[11] = { items:[], label: 'other', title: 'Other', url: '/items/other'};
        break;
      case 'adventure-footprints': // system
        items[0] = { items:[], label: 'gameplay-basics', title: 'Gameplay Basics', url: '/system/gameplay-basics'};
        items[1] = { items:[], label: 'dungeon-features', title: 'Dungeon Features', url: '/system/dungeon-features'};
        items[2] = { items:[], label: 'resonance', title: 'Resonance', url: '/system/resonance'};
        items[3] = { items:[], label: 'synthesis-runes', title: 'Runes', url: '/system/synthesis-runes'};
        items[4] = { items:[], label: 'necklace-abilities', title: 'Abilities', url: '/system/necklace-abilities'};
        items[5] = { items:[], label: 'bana-powers', title: 'Bana Powers', url: '/system/bana-powers'};
        items[6] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[7] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        items[8] = { items:[], label: 'allies', title: 'Allies', url: '/system/allies'};
        items[9] = { items:[], label: 'npcs', title: 'NPCs', url: '/system/npcs'};
        items[10] = { items:[], label: 'villages', title: 'Villages', url: '/system/villages'};
        items[11] = { items:[], label: 'status-conditions', title: 'Status Conditions', url: '/system/status-conditions'};
        items[12] = { items:[], label: 'map-patterns', title: 'Map Patterns', url: '/system/map-patterns'};
        items[13] = { items:[], label: 'wanderer-rescue', title: 'Wanderer Rescue', url: '/system/wanderer-rescue'};
        items[14] = { items:[], label: 'adventure-footprints', title: 'Footprints', url: '/system/adventure-footprints'};
        items[15] = { items:[], label: 'expert-badges', title: 'Expert Badges', url: '/system/expert-badges'};
        break;
      case 'asura-realm': // dungeons
        items[0] = { items:[], label: 'shrine-of-challenges', title: 'Training', url: '/dungeons/shrine-of-challenges'};
        items[1] = { items:[], label: 'shrine-of-night-adventures', title: 'Night Training', url: '/dungeons/shrine-of-night-adventures'};
        items[2] = { items:[], label: 'statue-cave', title: 'Statue Cave', url: '/dungeons/statue-cave'};
        items[3] = { items:[], label: 'southern-isle-beach', title: 'Southern Beach', url: '/dungeons/southern-isle-beach'};
        items[4] = { items:[], label: 'emerald-terrace', title: 'Emerald Terrace', url: '/dungeons/emerald-terrace'};
        items[5] = { items:[], label: 'platinum-paradise', title: 'Platinum Paradise', url: '/dungeons/platinum-paradise'};
        items[6] = { items:[], label: 'bayside-monster-cave', title: 'Bayside Cave', url: '/dungeons/bayside-monster-cave'};
        items[7] = { items:[], label: 'double-strike-cave', title: 'Double Strike', url: '/dungeons/double-strike-cave'};
        items[8] = { items:[], label: 'jaguars-hunting-forest', title: 'Jaguar\'s Forest', url: '/dungeons/jaguars-hunting-forest'};
        items[9] = { items:[], label: 'cave-of-endless-night', title: 'Endless Night', url: '/dungeons/cave-of-endless-night'};
        items[10] = { items:[], label: 'entrancing-lane', title: 'Entrancing Lane', url: '/dungeons/entrancing-lane'};
        items[11] = { items:[], label: 'ceiling-cave', title: 'Ceiling Cave', url: '/dungeons/ceiling-cave'};
        items[12] = { items:[], label: 'trap-zone', title: 'Trap Zone', url: '/dungeons/trap-zone'};
        items[13] = { items:[], label: 'static-forest', title: 'Static Forest', url: '/dungeons/static-forest'};
        items[14] = { items:[], label: 'banana-kingdom', title: 'Banana Kingdom', url: '/dungeons/banana-kingdom'};
        items[15] = { items:[], label: 'trial-road', title: 'Trial Road', url: '/dungeons/trial-road'};
        items[16] = { items:[], label: 'asura-realm', title: 'Asura Realm', url: '/dungeons/asura-realm'};
        items[17] = { items:[], label: 'mystery-shopping-mall', title: 'Mystery Mall', url: '/dungeons/mystery-shopping-mall'};
        items[18] = { items:[], label: 'grass-and-scroll-cave', title: 'Grass and Scroll', url: '/dungeons/grass-and-scroll-cave'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
