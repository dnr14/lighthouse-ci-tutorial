const fs = require("fs");

module.exports = ({ github, context, core }) => {
  const results = JSON.parse(fs.readFileSync("./lhci_reports/manifest.json"));

  let comments = "";

  results.forEach((result) => {
    const { summary, jsonPath, url } = result;

    const details = JSON.parse(fs.readFileSync(jsonPath));

    const { audits } = details;

    const formatResult = (res) => Math.round(res * 100);

    Object.keys(summary).forEach(
      (key) => (summary[key] = formatResult(summary[key]))
    );

    const score = (res) => (res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴");

    const comment = [
      `⚡️ Lighthouse report!(${url})`,
      `| Category | Score |`,
      `| --- | --- |`,
      `| ${score(summary.performance)} Performance | ${summary.performance} |`,
      `| ${score(summary.accessibility)} Accessibility | ${
        summary.accessibility
      } |`,
      `| ${score(summary["best-practices"])} Best practices | ${
        summary["best-practices"]
      } |`,
      `| ${score(summary.seo)} SEO | ${summary.seo} |`,
      `| ${score(summary.pwa)} PWA | ${summary.pwa} |`,
    ].join("\n");

    const detail = [
      `| Category | Score |`,
      `| --- | --- |`,
      `| ${score(
        audits["first-contentful-paint"].score * 100
      )} First Contentful Paint | ${
        audits["first-contentful-paint"].displayValue
      } |`,
      `| ${score(audits["speed-index"].score * 100)} SpeedIndex | ${
        audits["speed-index"].displayValue
      } |`,
      `| ${score(
        audits["total-blocking-time"].score * 100
      )} Total Blocking Time | ${audits["total-blocking-time"].displayValue} |`,
    ].join("\n");
    comments += comment + "\n\n" + detail + "\n\n";
  });

  core.setOutput("comments", comments);
};
