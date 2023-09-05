<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Grid, OrbitControls, Sky } from '@threlte/extras'

  const DAYS_OF_WEEK = 7;
  const circle_items = [6, 10, 16, 20].map(x => x*DAYS_OF_WEEK); // 364 days total
  const circle_gap_mult = 4;
  const initial_radius = 4;
  const box_size = 0.2;
  const arch_circle = 0.9;  // 1 is full;
  const items_elevation = 1;
</script>

<Sky elevation={0.5} />
<T.PerspectiveCamera
  makeDefault
  position={[0, 3, 18]}
  fov={10}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/>


<T.PerspectiveCamera
  makeDefault
  position={[-50, 50, 50]}
  fov={10}
>
  <OrbitControls
    autoRotate
    enableZoom={false}
    enableDamping
    autoRotateSpeed={0.5}
    target.y={1.5}
  />
</T.PerspectiveCamera>

<Grid
  position.y={-0.001}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={25}
  cellSize={2}
/>

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

{#each circle_items as items_per_circle, circle_i} 
{   #each Array(items_per_circle) as _, instance_j}
      <T.Mesh
        position = {[Math.sin(Math.PI * 2 * arch_circle * instance_j / items_per_circle) * (circle_i * circle_gap_mult + initial_radius), items_elevation, Math.cos(Math.PI * 2 * arch_circle * instance_j / items_per_circle) *  (circle_i * circle_gap_mult + initial_radius)]}
        >
        <T.BoxGeometry args={[box_size, box_size, box_size]} />
        <T.MeshStandardMaterial color="#00FF00" />
      </T.Mesh>
  {/each}
{/each}