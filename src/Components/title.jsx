/* eslint-disable react/prop-types */
const skillList = [
  {
    skill: 'Javascript',
    level: 'Advanced',
    bgColor: '#60DAFB'
  },
  {
    skill: 'Typescript',
    level: 'Intermediate',
    bgColor: '#60DAFB'
  },
  {
    skill: 'HTML/CSS',
    level: 'Advanced',
    bgColor: '#60DAFB'
  },
  {
    skill: 'React',
    level: 'Beginner',
    bgColor: '#60DAFB'
  },
  {
    skill: 'NodeJS',
    level: 'Intermediate',
    bgColor: '#60DAFB'
  },
  {
    skill: 'ExprressJS',
    level: 'Intermediate',
    bgColor: '#60DAFB'
  },
  {
    skill: 'PostgresSql',
    level: 'Intermediate',
    bgColor: '#60DAFB'
  },
  {
    skill: 'MySqlDB',
    level: 'Intermediate',
    bgColor: '#60DAFB'
  },
  {
    skill: 'MongoDB',
    level: 'Beginner',
    bgColor: '#60DAFB'
  }
];

/**
 *
 * @param {object} props
 * @returns set Styles Based on level
 */
export function MyskillSetIdenfier({ skill, level, bgColor }) {
  let setLevel = '';
  let bg = bgColor;
  let color = 'black';

  switch (level) {
    case 'Advanced':
      setLevel = '💪';
      bg = 'blue';
      color = 'white';
      break;
    case 'Intermediate':
      setLevel = '👍';

      break;
    default:
      setLevel = '🐥';
      bg = 'red';
  }

  const styles = {
    backgroundColor: bg,
    color
  };

  return (
    <>
      <li key={skill} style={styles}>
        {skill}
        <span>{setLevel}</span>
      </li>
    </>
  );
}

/**
 * @returns add list of skills
 */
export const Skillset = () => {
  return (
    <>
      <ul className='skillList'>
        {skillList.map(user => (
          <MyskillSetIdenfier key={user.skill} skill={user.skill} level={user.level} bgColor={user.bgColor} />
        ))}
      </ul>
    </>
  );
};
