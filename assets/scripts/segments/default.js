export const DEFAULT_SEGMENTS = {
  'false': [ // Right-hand traffic
    { type: 'sidewalk', variant: { 'sidewalk-density': 'normal' }, width: 3 },
    { type: 'transit-shelter', variant: { 'orientation': 'left', 'transit-shelter-elevation': 'street-level' }, width: 9 },
    { type: 'sidewalk-tree', variant: { 'tree-type': 'big' }, width: 2 },
    { type: 'parking-lane', variant: { 'parking-lane-direction': 'inbound', 'parking-lane-orientation': 'left' }, width: 9 },
    { type: 'turn-lane', variant: { 'direction': 'inbound', 'turn-lane-orientation': 'left-straight' }, width: 13 },
    { type: 'drive-lane', variant: { 'direction': 'inbound', 'car-type': 'car' }, width: 13 },
    { type: 'parking-lane', variant: { 'parking-lane-direction': 'inbound', 'parking-lane-orientation': 'right' }, width: 9 },
    { type: 'sidewalk-tree', variant: { 'tree-type': 'big' }, width: 4 },
    { type: 'sidewalk-lamp', variant: { 'lamp-orientation': 'left', 'lamp-type': 'traditional' }, width: 2 },
    { type: 'sidewalk', variant: { 'sidewalk-density': 'dense' }, width: 8 }
  ],
  'true': [ // Left-hand traffic
    { type: 'sidewalk', variant: { 'sidewalk-density': 'normal' }, width: 3 },
    { type: 'transit-shelter', variant: { 'orientation': 'left', 'transit-shelter-elevation': 'street-level' }, width: 9 },
    { type: 'sidewalk-tree', variant: { 'tree-type': 'big' }, width: 2 },
    { type: 'parking-lane', variant: { 'parking-lane-direction': 'inbound', 'parking-lane-orientation': 'left' }, width: 9 },
    { type: 'turn-lane', variant: { 'direction': 'inbound', 'turn-lane-orientation': 'left-straight' }, width: 13 },
    { type: 'drive-lane', variant: { 'direction': 'inbound', 'car-type': 'car' }, width: 13 },
    { type: 'parking-lane', variant: { 'parking-lane-direction': 'inbound', 'parking-lane-orientation': 'right' }, width: 9 },
    { type: 'sidewalk-tree', variant: { 'tree-type': 'big' }, width: 4 },
    { type: 'sidewalk-lamp', variant: { 'lamp-orientation': 'left', 'lamp-type': 'traditional' }, width: 2 },
    { type: 'sidewalk', variant: { 'sidewalk-density': 'dense' }, width: 8 }
  ]
}
