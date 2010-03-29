var TinyMCEEditor = Class.create({

  initialize: function(textarea, trigger) {

    var self = this;

    this.textarea = textarea;
    this.trigger  = $(trigger);
    this.trigger.observe('change', function() {
      self.toggle(this);
    });

    Event.observe(window, 'load', function() {
      if (self.isRichTextEditor(self.trigger)) {
        self.enable();
      }
    });
  },

  toggle: function(trigger) {
    this.isRichTextEditor(trigger) ? this.enable() : this.disable();
  },

  isRichTextEditor: function(trigger) {
    return trigger.value == 'Rich Text Editor';
  },

  enable: function() {
    tinyMCE.execCommand('mceAddControl', false, $(this.textarea));
  },

  disable: function() {
    tinyMCE.execCommand('mceRemoveControl', false, $(this.textarea));
  }

});