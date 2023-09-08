<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Grid, OrbitControls, Sky, Environment } from '@threlte/extras'

  const DAYS_OF_WEEK = 7;
  const circle_items = [6, 10, 16, 20].map(x => x*DAYS_OF_WEEK); // 364 days total
  const circle_gap_mult = 3;
  const initial_radius = 6;
  const sphere_radius = 0.3;
  const sphere_segments = 3;
  const arch_circle = 0.9;  // 1 is full;
  const items_elevation = 0.1;
  const [ground_projection_radius, ground_projection_scale, ground_projection_height]  = [400, 200, 20];
  const environment_file_name = "kloppenheim_02_1k.hdr"
</script>

<!-- 
<Sky elevation={0.5} />
<T.PerspectiveCamera
  makeDefault
  position={[0, 3, 18]}
  fov={10}
  on:create={({ ref }) => {
    ref.lookAt(0, 0, 0)
  }}
/> -->


<!-- Equirectangular hdr envmap -->
<Environment
  path="/hdr/"
  files={environment_file_name}
  isBackground={false}
  format="hdr"
  groundProjection={{ radius: ground_projection_radius, height: ground_projection_height, scale: [ground_projection_scale, ground_projection_scale, ground_projection_scale] }}
  />

<T.PerspectiveCamera
  position={[20, 5, 20]}
  fov={60}
  near={1}
  far={20000}
  makeDefault
>
  <OrbitControls
    autoRotate={true}
    enableZoom={true}
  />
</T.PerspectiveCamera>

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

        <T.SphereGeometry args={[sphere_radius, sphere_segments, sphere_segments]} />
        <T.MeshStandardMaterial color="#00FF00" roughness=0.8 metalness=0.0 />
      </T.Mesh>
  {/each}
{/each}