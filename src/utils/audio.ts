/**
 * Custom synthesized sounds using Web Audio API
 * No external assets required. Completely lightweight and self-contained.
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Disabled by default for better user consent; can be toggled on

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    // Resume context if suspended (browser security blocks autoplay)
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    this.initCtx();
    
    // Play a tiny confirmation tone if unmuted
    if (!this.isMuted) {
      setTimeout(() => this.playSuccess(), 50);
    }
    return this.isMuted;
  }

  public getMuteStatus(): boolean {
    return this.isMuted;
  }

  /**
   * Extremely subtle high-frequency mechanical tick for hover feedback
   */
  public playHover() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, this.ctx.currentTime); // high pitch tick
      
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.003, this.ctx.currentTime); // ultra quiet
      gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Ignore audio errors gracefully
    }
  }

  /**
   * Premium high-passed soft click sound for clicks
   */
  public playClick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      // Ignore
    }
  }

  /**
   * Warm dual-tone upward sweep for achievements or menu opening
   */
  public playSuccess() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      
      // Tone 1 (fundamental)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(330, now); // E4
      osc1.frequency.exponentialRampToValueAtTime(440, now + 0.25); // A4
      
      gain1.gain.setValueAtTime(0.02, now);
      gain1.gain.exponentialRampToValueAtTime(0.00001, now + 0.3);
      
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start();
      osc1.stop(now + 0.35);

      // Tone 2 (harmony)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(495, now + 0.05); // B4
      osc2.frequency.exponentialRampToValueAtTime(660, now + 0.25); // E5
      
      gain2.gain.setValueAtTime(0.015, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.00001, now + 0.35);
      
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.4);
    } catch (e) {
      // Ignore
    }
  }
}

export const sounds = new SoundManager();
