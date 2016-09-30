AFRAME.registerShader('glow-shader', {
  schema: {
    side: { default: THREE.FrontSide },
    blending: { default: THREE.AdditiveBlending },
    c: { type: 'number', is: 'uniform', default: 0.05 },
    p: { type: 'number', is: 'uniform', default: 4.5 },
    viewVector: { type: 'vec3', is: 'uniform', default: '0.0 0.0 0.0' },
    glowColor: { type: 'color', is: 'uniform', default: '1.0 1.0 0.0' },
  },
  vertexShader: [
    'uniform vec3 viewVector;',
    'uniform float c;',
    'uniform float p;',
    'varying float intensity;',
    'void main() {',
      'vec3 vNormal = normalize( normalMatrix * normal );',
      'vec3 vNormel = normalize( normalMatrix * viewVector );',
      'intensity = pow( c - dot(vNormal, vNormel), p );',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
    '}',
  ].join('\n'),
  fragmentShader: [
    'uniform vec3 glowColor;',
    'varying float intensity;',
    'void main() {',
      'vec3 glow = glowColor * intensity;',
      'gl_FragColor = vec4( glow, 1.0 );',
    '}',
  ].join('\n'),
  init() {
    this.material.transparent = true;
  },
  update(data) {
    this.material.side = data.side;
    this.material.blending = data.blending;
  },
})
