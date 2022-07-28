import ClassRoom from './0-classroom';

export default function initializeRooms() {
  for (const room of this._maxStudentsSize) {
    yield room;
  }
}
