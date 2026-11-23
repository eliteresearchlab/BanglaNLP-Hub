/**
 * Narrow task phrases shared by discover.ts and promote.ts. classify() in both
 * scripts checks these before its broad keyword rules, so that for example
 * grammar error correction is not filed under POS, and anaphora resolution is
 * not filed under the honorific/LLM rule.
 */
export const specific: [RegExp, string][] = [
  [/speech translation|speech-to-(speech|text) translation|spoken language translation/, 'st'],
  [/visual question answer|\bvqa\b/, 'vqa'],
  [/image caption|caption generation/, 'caption'],
  [/dialogue|conversational system|chatbot/, 'dialogue'],
  [/grammar error (detection|correction)|grammatical error (detection|correction|explanation)|spelling correction|spell checker/, 'gec'],
  [/coreference resolution|anaphora resolution/, 'coref'],
  [/natural language inference|\bnli\b/, 'nli'],
  [/word sense disambiguation/, 'wsd'],
  [/punctuation restoration|punctuation prediction/, 'punct'],
  [/style transfer/, 'style'],
  [/stance detection/, 'stance'],
  [/readability|lexical complexity/, 'readab'],
  [/\bocr\b(?!['’`]d)|optical character recognition|scene text recognition/, 'ocr'],
  [/entity linking/, 'el'],
];
