import ClassRoom from './0-classroom';

function initializeRooms() {
  const room = new ClassRoom(19);
  const room1 = new ClassRoom(20);
  const room2 = new ClassRoom(34);
  console.log(room, room1, room2);
}

export default initializeRooms;
