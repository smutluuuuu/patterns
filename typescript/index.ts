//BRIDGE PATTERN

// interface MediaPlayerImplementation {
//   playAudio(): void;
//   playVideo(): void;
// }

// class WindowsMediaPlayer implements MediaPlayerImplementation {
//   playAudio(): void {
//     console.log("Playing audio on Windows media player.");
//   }
//   playVideo(): void {
//     console.log("Playing video on Windows media player.");
//   }
// }

// class MacOSMediaPlayer implements MediaPlayerImplementation {
//   playAudio(): void {
//     console.log("Playing audio on MacOS media player.");
//   }
//   playVideo(): void {
//     console.log("Playing video on MacOS media player.");
//   }
// }

// abstract class MediaPlayerAbstraction {
//   constructor(protected implementation: MediaPlayerImplementation) {
//     this.implementation = implementation;
//   }

//   playFile(): void {}
// }

// class AudioPlayer extends MediaPlayerAbstraction {
//   playFile(): void {
//     this.implementation.playAudio();
//   }
// }
// class MediaPlayer extends MediaPlayerAbstraction {
//   playFile(): void {
//     this.implementation.playVideo();
//   }
// }

// let player = new AudioPlayer(new WindowsMediaPlayer());
// player.playFile();

// player = new MediaPlayer(new MacOSMediaPlayer());
// player.playFile();
